import { getPoints } from "../../data/state-manager.js";

export function ResultPanelComponent() {
    const element = document.createElement('div')

    const points = getPoints()

    element.append(`player1: ${points.players[0].value}; player2: ${points.players[1].value}; google: ${points.google}`)

    return element;
}