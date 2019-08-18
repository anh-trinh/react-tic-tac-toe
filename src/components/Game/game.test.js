// Game/game.test.js
import React from "react";
import Game from "./game";
import { shallow, mount } from "enzyme";
import "../../setupTest";

it("renders without crashing", () => {
  shallow(<Game />);
});

it("renders game status correctly", () => {
  const wrapper = mount(<Game />);

  //Chắc chắn trước khi game bắt đầu và người chơi tiếp theo là X
  const firstPlayer = wrapper
    .find("div.game-info")
    .children()
    .first()
    .text();
  expect(firstPlayer).toEqual("Next player: X");

  //player X click tại first() tức là vị trí 0
  //Và sau khi click người chơi tiếp theo là O
  const button = wrapper.find("button.square").first();
  button.simulate("click");
  const secondPlayer = wrapper
    .find("div.game-info")
    .children()
    .first()
    .text();
  expect(secondPlayer).toEqual("Next player: O");

  //player O click tại vị trí 1
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')

  //player X click tại vị trí 4
  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')

  //player O click tại vị trí 5
  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')
  
  //player X click tại vị trí 8
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')
  
  //Và theo các vị trí click như trên người chiến thắng sẽ là player X
  //Test kết quả được show ra có phải player X không
  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('Winner: X')
});
