import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

it("App matching snapshot for root component", () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
