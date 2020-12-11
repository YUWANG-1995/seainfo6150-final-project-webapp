import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the Form Component Correctly", () => {

  const test = {
    brand: 'BMW',
    model: 'X1'
  }

  const { container } = render(
    <BrowserRouter>
      <Form brand={test.brand} model={test.model} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
