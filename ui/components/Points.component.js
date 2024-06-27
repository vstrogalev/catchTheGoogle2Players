import { getPoints } from "../../data/state-manager";

export function Points() {
  const points = getPoints();
  const pointsContainer = createNode("div", "points__container");

  const pointsCatchRow = createNode("div", "points__row");
  const pointsCatchTitle = createNode("div", "points__title", "Catch:");
  const pointsCatchData = createNode("div", "points__data", points.catch);
  pointsCatchRow.append(pointsCatchTitle, pointsCatchData);

  const pointsMissRow = createNode("div", "points__row");
  const pointsMissTitle = createNode("div", "points__title", "Miss:");
  const pointsMissData = createNode("div", "points__data", points.miss);
  pointsMissRow.append(pointsMissTitle, pointsMissData);

  pointsContainer.append(pointsCatchRow, pointsMissRow);

  return pointsContainer;
}
