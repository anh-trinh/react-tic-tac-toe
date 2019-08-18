// Board/board.test.js
import React from "react";
import Board from "./board";
import { shallow, mount } from "enzyme";
import "../../setupTest";

it("renders without crashing", () => {
  let squares = Array(9).fill(null);
  shallow(<Board squares={squares} />);
});

it("calls onClick event on click of a board square", () => {
  let squares = Array(9).fill(null);
  const onClick = jest.fn();
  let wrapper = mount(<Board squares={squares} onClick={onClick} />);
  //Mô phỏng việc click vào square đầu tiên trong board, 0 là index của mảng squares.
  wrapper
    .find("button.square")
    .first()
    .simulate("click");
  expect(onClick).toBeCalledWith(0);
});
