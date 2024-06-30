import { PLAYERS } from "../../data/constants.js";
import { getPoints } from "../../data/state-manager.js";
import { createNode } from "../../utils/createNode.js";
import { ResultItem } from "./ResultItem.component.js";
import { svgContent as player1Image } from "../../images/player1.js";
import { svgContent as player2Image } from "../../images/player2.js";
import { svgContent as GoogleSvg } from "../../images/google.js";

export function ResultPanelComponent() {
  const points = getPoints();
  const element = createNode("div", "result");

  // Player 1
  const player1 = ResultItem(PLAYERS.PLAYER1, player1Image, points.players[PLAYERS.PLAYER1].value);

  // Player 2
  const player2 = ResultItem(PLAYERS.PLAYER2, player2Image, points.players[PLAYERS.PLAYER2].value);

  // Google
  const googleElement = ResultItem(PLAYERS.GOOGLE, GoogleSvg, points.google);

  // Time
  const time = createNode('div', 'result__item');
  const timeTitle = createNode('span', 'result__itemTitle', 'Time:');
  const timeData  = createNode('span', 'result__points', '00:00')
  time.append(timeTitle, timeData);

  // element.append(
  //   `player1: ${points.players[0].value}; player2: ${points.players[1].value}; google: ${points.google}`
  // );

  element.append(player1, player2, googleElement, time);

  return element;
}
