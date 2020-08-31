import React from "react";
import RootSearch from "./RootSearch";
import renderer from "react-test-renderer";

it("RootSearch matching snapshot with one test location for autocomplete", () => {
  const location = {
    label: "test location",
    lat: 0,
    lon: 0,
  };

  const tree = renderer.create(
    <RootSearch
      onSearch={jest.fn()}
      handleInputChange={jest.fn()}
      locations={[location]}
    />
  );

  expect(tree).toMatchSnapshot();
});
