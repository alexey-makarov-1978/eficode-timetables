import React from "react";
import { mount } from "enzyme";
import RootSearch from "./RootSearch";

const location = {
  label: "test location",
  lat: 0,
  lon: 0,
};

it("RootSearch contains necessary labels", () => {
  const wrapper = mount(
    <RootSearch
      onSearch={jest.fn()}
      handleInputChange={jest.fn()}
      locations={[location]}
    />
  );

  expect(wrapper.text().includes("Reittiopas")).toBe(true);
  expect(wrapper.text().includes("Hae reitti")).toBe(true);
  expect(wrapper.text().includes("Mista?")).toBe(true);
  expect(wrapper.text().includes("Mihin?")).toBe(true);
});
