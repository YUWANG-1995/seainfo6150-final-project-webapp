import React from "react";
import { render } from "@testing-library/react";
import BrandList from "./BrandList.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the BrandList Component Correctly", () => {
  const test = [
    {
      brand: 'BMW',
      brandImage: {
        _url: "https://4.bp.blogspot.com/-IOuK59xvd-Q/V0yK19RcD8I/AAAAAAAAAJs/4gavimm0yW8av7K9yZSIvNQ5A-NeW2Y-ACLcB/s1600/bmw-logo.jpg"
      }
    },
    {
      brand: "Audi",
      brandImage: {
        _url: "https://www.logolynx.com/images/logolynx/3f/3f331726cd34688ab4080efc59e7017f.png"
      }
    }
  ]

  const { container } = render(
    <BrowserRouter>
      <BrandList
        brands={Object.values(test)}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
