import React from "react";
import { render } from "@testing-library/react";
import ThankyouPage from "./ThankyouPage.jsx";

it("renders the ThankyouPage Component Correctly", () => {
  const { container } = render(<ThankyouPage />);
  expect(container).toMatchSnapshot();
});
