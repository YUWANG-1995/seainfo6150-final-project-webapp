import React from "react";
import { render } from "@testing-library/react";
import ModelList from "./ModelList.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the ModelList Component Correctly", () => {
  const test = [
    {
      brand: 'BMW',
      model: {
        "X1": {
          modelId: "X1"
        },
        "X4": {
          modelId: "X4"
        }
      },
      brand: "Audi",
      model: {
        "A1": {
          modelId: "A1"
        },
        "A3": {
          modelId: "A3"
        }
      }
    }
  ]

  const { container } = render(
    <BrowserRouter>
      <ModelList
        brands={Object.values(test)}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
