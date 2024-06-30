import { getPoints } from "../../data/state-manager.js";
import { createNode } from "../../utils/createNode.js";

export function ResultPanelComponent() {
  const points = getPoints();
  const element = createNode("div", "result");

  element.append(
    `player1: ${points.players[0].value}; player2: ${points.players[1].value}; google: ${points.google}`
  );

  return element;
}
