import { GAME_STATUSES } from "../data/constants.js";
import { getGameStatus } from "../data/state-manager.js";
import { WinComponent } from "./Win/Win.component.js";
import { GridComponent } from "./Grid/Grid.component.js";
import { ResultPanelComponent } from "./ResultPanel/ResultPanel.component.js";

export function AppComponent() {
  const element = document.createElement("div");

  const status = getGameStatus();

  const transitions = {
    [GAME_STATUSES.IN_PROGRESS]: () => {
      const resultPanelElement = ResultPanelComponent();
      element.append(resultPanelElement);
      const gridElement = GridComponent();
      element.append(gridElement);
    },
    [GAME_STATUSES.WING]: () => {
      const loseElement = WinComponent();
      element.append(loseElement);
    },
    [GAME_STATUSES.SETTINGS]: () => {
      console.warn("NOT IMPLEMENTED YET");
    },
    [GAME_STATUSES.WIN]: () => {
      console.warn("NOT IMPLEMENTED YET");
    },
  };

  transitions[status]();

  return element;
}
