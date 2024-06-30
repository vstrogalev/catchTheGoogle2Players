import { PLAYERS } from "../../data/constants.js";
import { getPoints } from "../../data/state-manager.js";
import { createNode } from "../../utils/createNode.js";
import { ResultItem } from "./ResultItem.component.js";
import { svgContent as player1Image } from "../../images/player1.js";

export function ResultPanelComponent() {
  const points = getPoints();
  const element = createNode("div", "result");

  // Player 1
  //   title
  //   svg
  //   points
  const player1 = ResultItem(PLAYERS.PLAYER1, player1Image, points.players[PLAYERS.PLAYER1].value);
  
  // Player 2
  // Google
  // Time


  // element.append(
  //   `player1: ${points.players[0].value}; player2: ${points.players[1].value}; google: ${points.google}`
  // );

  element.append(player1);

  return element;
}
