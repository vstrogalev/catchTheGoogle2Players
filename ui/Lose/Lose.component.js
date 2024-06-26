import { getPoints, playAgain } from "../../data/state-manager.js";

export function LoseComponent() {
    const element = document.createElement('div')

    const points = getPoints()

    const titleElement = document.createElement('h1')
    titleElement.append('you lose');
    
    element.append(titleElement);

    element.append(`player1: ${points.players[0].value}; player2: ${points.players[1].value}; google: ${points.google}`)

    const playAgainButtonElement = document.createElement('button')
    playAgainButtonElement.append('Play again');
    playAgainButtonElement.addEventListener('click', () => {
        playAgain();
    });

    element.append(playAgainButtonElement)

    return element;
}