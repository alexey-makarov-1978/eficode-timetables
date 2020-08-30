import React, { useState, useEffect } from "react";
import "./App.css";
import RootSearch from "../rootSearch/RootSearch";
import Plan from "../plan/Plan";
import { getPlan, getLocations } from "../../api/planApi";
import Spinner from "../spinner/Spinner";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

function App() {
  const classes = useStyles();

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchLocations, setSearchLocations] = useState([]);
  const [searchString, setSearchString] = useState("");

  const [coordinates, setCoordinates] = useState({
    oLat: null,
    oLon: null,
    dLat: null,
    dLon: null,
  });

  // called when Search button is clicked
  // state change executes hook that queries HSL using GraphQL
  function searchPlan(origin, destination) {
    if (
      !origin ||
      !destination ||
      origin.label === "" ||
      destination.label === ""
    ) {
      setError(true);
      return;
    }

    setCoordinates({
      oLat: origin.lat,
      oLon: origin.lon,
      dLat: destination.lat,
      dLon: destination.lon,
    });
  }

  // Updates autocomplete options when user types in textbox
  // for origin or destination location
  // executes hook that retrieves possible autocomplete options
  function handleSearchChange(searchText) {
    setSearchString(searchText);
  }

  // retrieves possible autocomplete options
  useEffect(() => {
    if (searchString.length > 0) {
      getLocations(searchString)
        .then((response) => {
          setSearchLocations(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchString]);

  // queries HSL using GraphQL and retrieves the plan
  useEffect(() => {
    if (coordinates.oLat) {
      setError(false);
      setLoading(true);

      getPlan(
        coordinates.oLat,
        coordinates.oLon,
        coordinates.dLat,
        coordinates.dLon
      )
        .then((response) => {
          setPlan(response);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
        });
    }
  }, [coordinates.oLat, coordinates.oLon, coordinates.dLat, coordinates.dLon]);

  return (
    <Box
      boxShadow={3}
      bgcolor="background.paper"
      m={1}
      p={1}
      className={classes.root}
    >
      <div className="App">
        <RootSearch
          onSearch={searchPlan}
          handleInputChange={handleSearchChange}
          locations={searchLocations}
        />
        <br></br>
        <Spinner loading={loading} />
        {error ? (
          <Alert severity="error">
            Network issue or incorrect origin/destination!
          </Alert>
        ) : (
          <></>
        )}
        {plan && !loading && !error ? <Plan data={plan} /> : <></>}
      </div>{" "}
    </Box>
  );
}

export default App;
