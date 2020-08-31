import React from "react";
import Plan from "./Plan";
import renderer from "react-test-renderer";

it("Plan matching snapshot with two itineraries", () => {
  const plan = {
    itineraries: [{ legs: [] }, { legs: [] }],
  };

  const tree = renderer.create(<Plan data={plan} />);
  expect(tree).toMatchSnapshot();
});
