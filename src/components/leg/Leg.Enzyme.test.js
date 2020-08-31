import React from "react";
import { shallow } from "enzyme";
import Leg from "./Leg";

const leg = {
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
};

it("Leg renders necessary labels", () => {
  const wrapper = shallow(<Leg data={leg} />);

  expect(wrapper.text().includes("13:21")).toBe(true);
  expect(wrapper.text().includes("13:28")).toBe(true);
  expect(wrapper.text().includes("Hanken")).toBe(true);
  expect(wrapper.text().includes("Kaupunginpuutarha")).toBe(true);
  expect(wrapper.text().includes("TRAM (1) 1 km (7 min)")).toBe(true);
});
