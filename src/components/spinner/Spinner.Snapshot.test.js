import React from "react";
import Spinner from "./Spinner";
import renderer from "react-test-renderer";

it("Spinner matching snapshot when visible", () => {
  const tree = renderer.create(<Spinner loading={true} />);
  expect(tree).toMatchSnapshot();
});

it("Spinner matching snapshot when invisible", () => {
  const tree = renderer.create(<Spinner loading={false} />);
  expect(tree).toMatchSnapshot();
});
