import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error.jsx";

it("renders the Error Component Correctly", () => {
  const { container } = render(
      <Error />
  );
  expect(container).toMatchSnapshot();
});
