import React from "react";
import Grid from "@material-ui/core/Grid";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";

import Leg from "../leg/Leg";
import { getTime, getDuration } from "../utils/utils";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: "100%",
    flexGrow: 1,
    padding: 2,
  },
}));

const Itinerary = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.grid}>
            <Grid container>
              <Grid item xs={2}>
                <b>{getTime(data.startTime)}</b>
              </Grid>
              <Grid item xs={4}>
                <MoreHorizIcon />
                <DirectionsBusIcon />
                <MoreHorizIcon />
              </Grid>
              <Grid item xs={6}>
                <b>
                  {getTime(data.endTime)} ({getDuration(data.duration)})
                </b>
              </Grid>
            </Grid>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {data.legs.map((leg, index) => (
              <Grid key={index} item xs={12}>
                <Leg data={leg} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Itinerary;
