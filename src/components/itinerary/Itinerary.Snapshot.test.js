import React from "react";
import Itinerary from "./Itinerary";
import renderer from "react-test-renderer";

it("Itinerary matching snapshot with 3 legs", () => {
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

  const tree = renderer.create(<Itinerary data={itinerary} />);
  expect(tree).toMatchSnapshot();
});
