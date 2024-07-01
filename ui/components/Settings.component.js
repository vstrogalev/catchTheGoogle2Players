import { Setting } from "./Setting.component.js";
import { getGridSize, getPointsTo, setGridSize, setPointsToLose, setPointsToWin } from "../../data/state-manager.js";
import { createNode } from "../../utils/createNode.js";
import { _settings } from "../../data/constants.js";

function handleChangeGridSize(event) {
  const selectedValue = event.target.value;

  setGridSize(selectedValue.split('x'))
}

function handleChangePointsToWin(event) {
  const selectedValue = event.target.value;

  setPointsToWin(selectedValue)
}

function handleChangePointsToLose(event) {
  const selectedValue = event.target.value;

  setPointsToLose(selectedValue)
  console.log('points to lose', selectedValue)
}

export function Settings(isActive) {
  const { width, height } = getGridSize();
  const selectedGridSize = `${width}x${height}`;
  const { pointsToWin, pointsToLose } = getPointsTo();

  const settingsContainer = createNode("div", "settings__container");

  const gridSettings = Setting("Grid size", "gridSize", _settings.gridSize, handleChangeGridSize, selectedGridSize, isActive);

  const pointsToWinSettings = Setting(
    "Points to win",
    "pointsToWin",
    _settings.pointsToWin,
    handleChangePointsToWin,
    String(pointsToWin), isActive
  );

  const pointsToLoseSettings = Setting(
    "Points to lose",
    "pointsToLose",
    _settings.pointsToLose,
    handleChangePointsToLose,
    String(pointsToLose),
    isActive
  );

  settingsContainer.append(
    gridSettings,
    pointsToWinSettings,
    pointsToLoseSettings
  );
  return settingsContainer;
}
