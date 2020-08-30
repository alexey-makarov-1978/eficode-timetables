import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import IconButton from "@material-ui/core/IconButton";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  root: {
    backgroundColor: "pink",
    flexGrow: 1,
    padding: 2,
  },
  header: {
    textAlign: "left",
  },
  search: {
    textTransform: "none",
    display: "inline",
  },
});

const RootSearch = ({ onSearch, handleInputChange, locations }) => {
  const classes = useStyles();

  // handcoded value of office location (as per task requirement)
  const defValue = {
    label: "Pohjoinen Rautatiekatu 25, Helsinki",
    lat: 60.169453,
    lon: 24.926041,
  };

  // empty value used when nothing is selected
  const emptyValue = {
    label: "",
    lat: 0,
    lon: 0,
  };

  // identifies what direction is disabled (origin or destination)
  const [direction, changeDirection] = useState(true);

  // holds textbox values
  const [origin, setOrigin] = useState(defValue);
  const [destination, setDestination] = useState(emptyValue);

  // hits autocomplete to populate with new options
  function handleLocationTextChange(event, value) {
    if (event && !event.target.disabled) {
      handleInputChange(value);
    }
  }

  // saves value when user selects from autocomplete options
  function handleLocationChange(event, value) {
    if (!event) return;

    let selectedValue = value;
    if (!selectedValue) selectedValue = emptyValue;

    if (direction) {
      setDestination(value);
    } else {
      setOrigin(value);
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title="Reittiopas >"
        action={<DirectionsBusIcon />}
      ></CardHeader>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Autocomplete
              onInputChange={handleLocationTextChange}
              onChange={handleLocationChange}
              options={locations}
              getOptionLabel={(option) => option.label}
              getOptionSelected={(option) => option.label}
              disabled={direction}
              fullWidth
              value={origin}
              renderInput={(params) => (
                <TextField {...params} label="Mista?" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="change"
              onClick={() => {
                if (direction) {
                  setOrigin(destination);
                  setDestination(defValue);
                } else {
                  setOrigin(defValue);
                  setDestination(origin);
                }

                changeDirection(!direction);
              }}
            >
              <ImportExportIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Autocomplete
              onInputChange={handleLocationTextChange}
              onChange={handleLocationChange}
              options={locations}
              getOptionLabel={(option) => option.label}
              getOptionSelected={(option) => option.label}
              disabled={!direction}
              fullWidth
              value={destination}
              renderInput={(params) => (
                <TextField {...params} label="Mihin?" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.search}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<LocationSearchingIcon />}
          onClick={() => onSearch(origin, destination)}
        >
          Hae reitti
        </Button>
        <br />
        <br />
      </CardActions>
    </Card>
  );
};

export default RootSearch;
