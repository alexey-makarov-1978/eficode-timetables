import React from "react";
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

export default Plan;
