import React from "react";
import { render } from "@testing-library/react";
import BrandListItem from "./BrandListItem.jsx";

it("renders the BrandListItem Component Correctly", ()=> {
  const test = {
      brand: 'BMW',
      brandImage: {
        _url: "https://4.bp.blogspot.com/-IOuK59xvd-Q/V0yK19RcD8I/AAAAAAAAAJs/4gavimm0yW8av7K9yZSIvNQ5A-NeW2Y-ACLcB/s1600/bmw-logo.jpg"
      }
  }

  const { container } = render(
    <BrandListItem
      brand = {test}
    />
  );
  expect(container).toMatchSnapshot();
})
