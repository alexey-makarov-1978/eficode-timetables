import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = ({ loading }) => {
  return loading ? <CircularProgress /> : <></>;
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
