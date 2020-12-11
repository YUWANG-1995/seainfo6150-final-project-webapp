import React from "react";
import { render } from "@testing-library/react";
import MainPage from "./MainPage.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the MainPage Component Correctly", () => {

  const { container } = render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
