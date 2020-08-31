import React from "react";
import Leg from "./Leg";
import renderer from "react-test-renderer";

it("Leg matching snapshot", () => {
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

  const tree = renderer.create(<Leg data={leg} />);
  expect(tree).toMatchSnapshot();
});
