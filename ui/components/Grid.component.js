import { _gridItemSize } from "../../data/constants.js";
import {
  getGooglePosition,
  getPlayerPositions,
  getGridSize,
} from "../../data/state-manager.js";
import { svgContent } from "../../images/google.js";
import { createNode } from "../../utils/createNode.js";

export function GridComponent() {
  const gridSize = getGridSize();
  const googlePosition = getGooglePosition();
  const playerPositions = getPlayerPositions();
  const board = createNode("table", "board");

  for (let y = 0; y < gridSize.height; y++) {
    const rowElement = createNode("tr", "board__row");

    for (let x = 0; x < gridSize.width; x++) {
      // TODO move to CellComponent
      // const cellElement = CellComponent(x,y)
      const cellElement = createNode("td", "board__item");
      cellElement.style.width = `${_gridItemSize}px`;
      cellElement.style.height = `${_gridItemSize}px`;

      if (googlePosition.x === x && googlePosition.y === y) {
        // TODO: const googleElement = Google();
        // const googleElement = createNode("svg", "googleImg");

        // Найдите символ и вставьте его в контейнер
        const googleElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        googleElement.innerHTML = svgContent;
        // const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#google');

        // googleElement.appendChild(useElement);

        // Установите атрибуты или стили SVG
        googleElement.setAttribute('width', '100%'); // Пример изменения ширины
        googleElement.setAttribute('height', '100%'); // Пример изменения высоты

        googleElement.addEventListener("click", () => {
          //catchGoogle();
          console.log('click')
        });

        cellElement.appendChild(googleElement);

        cellElement.append(googleElement);
      }

      if (playerPositions[0].x === x && playerPositions[0].y === y) {
        // TODO: const googleElement = Google();
        const playerElement = document.createElement("span");
        playerElement.append("- P1 -");
        cellElement.append(playerElement);
      }

      if (playerPositions[1].x === x && playerPositions[1].y === y) {
        const playerElement = document.createElement("span");
        playerElement.append("- P2 -");
        cellElement.append(playerElement);
      }

      rowElement.append(cellElement);
    }

    board.appendChild(rowElement);
  }

  return board;
}
