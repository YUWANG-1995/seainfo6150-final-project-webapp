import React from "react";
import { render } from "@testing-library/react";
import ModelListItem from "./ModelListItem.jsx";

it("renders the ModelList Component Correctly", ()=> {
  const test = {
      brand: 'BMW',
      model: "X1"
  }

  const { container } = render(
    <ModelListItem
      brand = {test.brand} model={test.model}
    />
  );
  expect(container).toMatchSnapshot();
})
