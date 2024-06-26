import { PLAYERS } from "../../data/constants.js";
import { getPoints, playAgain } from "../../data/state-manager.js";
import { createNode } from "../../utils/createNode.js";

export function WinComponent(player) {
  let title = player === PLAYERS.GOOGLE ? 'Google Win!' : 'You Win!';
  let description = player === PLAYERS.GOOGLE ? "You'll be lucky next time" : player;

  const element = createNode("div");
  const titleElement = createNode("h2", "", title);
  const descriptionElement = createNode("p", "", description);

  const points = getPoints();
  const pointsContainer = createNode('div', 'points__container');

  const pointsCatchRow = createNode('div', 'points__row');
  const pointsCatchTitle = createNode('div', 'points__title', 'Catch:');
  const pointsCatchData = createNode('div', 'points__data', points.catch);
  pointsCatchRow.append(pointsCatchTitle, pointsCatchData);

  const pointsTimeRow = createNode('div', 'points__row');
  const pointsTimeTitle = createNode('div', 'points__title', 'Time:');
  const pointsTimeData = createNode('div', 'points__data', '1m12s'); // TODO hardcode
  pointsTimeRow.append(pointsTimeTitle, pointsTimeData);

  pointsContainer.append(pointsCatchRow, pointsTimeRow);

  element.append(
    `player1: ${points.players[0].value}; player2: ${points.players[1].value}; google: ${points.google}`
  );

  const playAgainButtonElement = document.createElement("button");
  playAgainButtonElement.append("Play again");
  playAgainButtonElement.addEventListener("click", () => {
    playAgain();
  });

  element.append(playAgainButtonElement);

  element.append(titleElement, descriptionElement, playAgainButtonElement);

  return element;
}
