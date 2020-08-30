import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = ({ loading }) => {
  return loading ? <CircularProgress /> : <></>;
};

export default Spinner;
