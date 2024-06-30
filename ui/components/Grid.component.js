import { _gridItemSize } from "../../data/constants.js";
import {
  getGooglePosition,
  getPlayerPositions,
  getGridSize,
} from "../../data/state-manager.js";
import { svgContent as GoogleSvg } from "../../images/google.js";
import { svgContent as Player1Svg } from "../../images/player1.js";
import { svgContent as Player2Svg } from "../../images/player2.js";
import { createNode } from "../../utils/createNode.js";
import { SvgToCell } from "./SvgToCell.component.js";

export function GridComponent() {
  const gridSize = getGridSize();
  const googlePosition = getGooglePosition();
  const playerPositions = getPlayerPositions();
  const board = createNode("table", "board");

  for (let y = 0; y < gridSize.height; y++) {
    const rowElement = createNode("tr", "board__row");

    for (let x = 0; x < gridSize.width; x++) {
      const cellElement = createNode("td", "board__item");
      cellElement.style.width = `${_gridItemSize}px`;
      cellElement.style.height = `${_gridItemSize}px`;

      if (googlePosition.x === x && googlePosition.y === y) {
        const googleElement = SvgToCell(GoogleSvg, 'svg');
        cellElement.append(googleElement);
      }

      if (playerPositions[0].x === x && playerPositions[0].y === y) {
        const player1 = SvgToCell(Player1Svg, 'svg');
        cellElement.append(player1);

        cellElement.append(player1);
      }

      if (playerPositions[1].x === x && playerPositions[1].y === y) {
        const player2 = SvgToCell(Player2Svg, 'svg');
        cellElement.append(player2);

        cellElement.append(player2);
      }

      rowElement.append(cellElement);
    }

    board.appendChild(rowElement);
  }

  return board;
}
