import React from "react";
import { mount } from "enzyme";
import Spinner from "./Spinner";

it("Spinner has circle when loading", () => {
  const wrapper = mount(<Spinner loading={true} />);
  expect(wrapper.find("svg").length).toEqual(1);
});

it("Spinner has no circle when not loading", () => {
  const wrapper = mount(<Spinner loading={false} />);
  expect(wrapper.find("svg").length).toEqual(0);
});
