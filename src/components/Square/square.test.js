// Square/square.test.js
import React from "react";
import Square from "./square";
import { shallow } from "enzyme";
import "../../setupTest";

it("renders without crashing", () => {
  shallow(<Square />);
});
