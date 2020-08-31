import React from "react";
import { shallow } from "enzyme";
import Plan from "./Plan";
import Itinerary from "../itinerary/Itinerary";

it("Plan renders 2 Itineraries", () => {
  const plan = {
    itineraries: [{ legs: [] }, { legs: [] }],
  };

  const wrapper = shallow(<Plan data={plan} />);

  expect(wrapper.find(Itinerary)).toHaveLength(2);
});
