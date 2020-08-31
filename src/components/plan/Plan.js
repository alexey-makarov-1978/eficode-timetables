import React from "react";
import PropTypes from "prop-types";
import Itinerary from "../itinerary/Itinerary";

const Plan = ({ data }) => {
  return (
    <div>
      {data.itineraries.map((itinerary, index) => (
        <Itinerary key={index} data={itinerary} />
      ))}
    </div>
  );
};

Plan.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Plan;
