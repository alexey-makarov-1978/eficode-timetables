import React from "react";
import { shallow } from "enzyme";
import Itinerary from "./Itinerary";
import Leg from "../leg/Leg";

const itinerary = {
  startTime: 1598869030000,
  endTime: 1598869904000,
  duration: 874,
  legs: [
    {
      startTime: 1598869030000,
      endTime: 1598869261000,
      mode: "WALK",
      duration: 231.0,
      distance: 261.037,
      route: null,
      from: {
        name: "Origin",
      },
      to: {
        name: "Hanken",
      },
    },
    {
      startTime: 1598869261000,
      endTime: 1598869715000,
      mode: "TRAM",
      duration: 454.0,
      distance: 1733.578241151397,
      route: {
        shortName: "1",
      },
      from: {
        name: "Hanken",
      },
      to: {
        name: "Kaupunginpuutarha",
      },
    },
    {
      startTime: 1598869715000,
      endTime: 1598869904000,
      mode: "WALK",
      duration: 189.0,
      distance: 204.855,
      route: null,
      from: {
        name: "Kaupunginpuutarha",
      },
      to: {
        name: "Destination",
      },
    },
  ],
};

it("Itinerary renders with 3 legs", () => {
  const wrapper = shallow(<Itinerary data={itinerary} />);
  expect(wrapper.find(Leg)).toHaveLength(3);
});

it("Itinerary renders necessary labels", () => {
  const wrapper = shallow(<Itinerary data={itinerary} />);
  expect(wrapper.text().includes("13:17")).toBe(true);
  expect(wrapper.text().includes("13:31")).toBe(true);
  expect(wrapper.text().includes("14 min")).toBe(true);
});
