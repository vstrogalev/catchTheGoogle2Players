import { Setting } from "./Setting.component.js";
import { getGridSize, getPointsTo, setGridSize } from "../../data/state-manager.js";
import { createNode } from "../../utils/createNode.js";
import { _settings } from "../../data/constants.js";

function handleChangeGridSize(event) {
  const selectedValue = event.target.value;

  setGridSize(selectedValue.split('x'))
  const { width, height } = getGridSize();
}

export function Settings(isActive) {
  const { width, height } = getGridSize();
  const selectedGridSize = `${width}x${height}`;
  const { pointsToWin, pointsToLose } = getPointsTo();

  const settingsContainer = createNode("div", "settings__container");

  const gridSettings = Setting("Grid size", "gridSize", _settings.gridSize, handleChangeGridSize, selectedGridSize);

  const pointsToWinSettings = Setting(
    "Points to win",
    "pointsToWin",
    _settings.pointsToWin
  );

  const pointsToLoseSettings = Setting(
    "Points to lose",
    "pointsToLose",
    _settings.pointsToLose
  );

  settingsContainer.append(
    gridSettings,
    pointsToWinSettings,
    pointsToLoseSettings
  );
  return settingsContainer;
}
