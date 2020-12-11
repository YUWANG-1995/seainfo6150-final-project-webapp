import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "./AboutUs.jsx";

it("renders the AboutUs Component Correctly", () => {
  const { container } = render(<AboutUs />);
  expect(container).toMatchSnapshot();
});
