import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TripOriginIcon from "@material-ui/icons/TripOrigin";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { getTime, getDistance } from "../utils/utils";

const useStyles = makeStyles({
  root: {
    backgroundColor: "gainsboro",
    flexGrow: 3,
    padding: 2,
  },
});

const Leg = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <b>{getTime(data.startTime)}</b>
        </Grid>
        <Grid item xs={2}>
          <TripOriginIcon />
        </Grid>
        <Grid item xs={8}>
          <b>{data.from.name}</b>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <MoreVertIcon />
        </Grid>
        <Grid item xs={8}>
          {data.mode +
            (data.route ? " (" + data.route.shortName + ")" : "") +
            " " +
            getDistance(data.distance) +
            " (" +
            Math.floor(data.duration / 60) +
            " min)"}
        </Grid>
        <Grid item xs={2}>
          <b>{getTime(data.endTime)}</b>
        </Grid>
        <Grid item xs={2}>
          <TripOriginIcon />
        </Grid>
        <Grid item xs={8}>
          <b>{data.to.name}</b>
        </Grid>
      </Grid>
    </div>
  );
};

export default Leg;
