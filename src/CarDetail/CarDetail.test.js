import React from "react";
import { render } from "@testing-library/react";
import CarDetail from "./CarDetail.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the CarDetail Component Correctly", () => {
  const test = {
    brand: 'BMW',
    model: {
      "X1": {
        modelId:"X1",
        price: "$35,400",
        image: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&client=byo&vehicle=21XA&paint=P0300&brand=WBBM&sa=S01XV,S01XV,S0302,S0316,S03AG,S03AT,S03L8,S0420,S0508,S0775,S07HW&fabric=FKCSW&RESP=PNG&quality=90&width=800&sharpness=100&BKGND=TRANSPARENT&angle=60",
        introduction: "2.0-liter BMW TwinPower Turbo inline 4-cylinder, Front-wheel drive"
        }
    }
  }
  const { container } = render(
    <BrowserRouter>
      <CarDetail brand={test.brand} model={test.model} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
