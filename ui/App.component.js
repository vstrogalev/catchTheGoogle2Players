import { GAME_STATUSES } from "../data/constants.js";
import { getGameStatus, playAgain } from "../data/state-manager.js";
import { WinComponent } from "./Win/Win.component.js";
import { GridComponent } from "./components/Grid.component.js";
import { ResultPanelComponent } from "./components/ResultPanel.component.js";
import { createNode } from "../utils/createNode.js";
import { Button } from "./components/Button.js";
import { Settings } from "./components/Settings.component.js";

export function AppComponent() {
  const appElement = createNode("div", "app");

  const status = getGameStatus();

  const transitions = {
    [GAME_STATUSES.IN_PROGRESS]: () => {
      const element = createNode("div", "play main");
      const settingsContainer = Settings(false);
      const resultPanelElement = ResultPanelComponent();
      const gridElement = GridComponent();

      element.append(
        settingsContainer,
        resultPanelElement,
        gridElement
      );

      appElement.append(element);
    },
    [GAME_STATUSES.WING]: () => {
      const loseElement = WinComponent();
      appElement.append(loseElement);
    },
    [GAME_STATUSES.SETTINGS]: () => {
      const element = createNode("div", "settings main");

      const settingsContainer = Settings(true);

      const button = Button("START GAME", () => {
        playAgain();
      });

      element.append(settingsContainer, button);
      appElement.append(element);
    },
    [GAME_STATUSES.WIN]: () => {
      console.warn("NOT IMPLEMENTED YET");
    },
  };

  transitions[status]();

  return appElement;
}
