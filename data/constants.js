export const GAME_STATUSES = {
  SETTINGS: "settings",
  IN_PROGRESS: "in-progress",
  WIN1: "win_player1",
  WIN2: "win_player2",
  WING: "win_google"
};

export const DIRECTIONS = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};

export const PLAYERS = {
  PLAYER1: 'Player 1',
  PLAYER2: 'Player 2',
  GOOGLE: 'Google'
}

export const _gridItemSize = 85;

export const _settings = {
  gridSize: {
    options: [
      {
        value: '4x4',
        width: 4,
        height: 4
      },
      {
        value: '5x5',
        width: 5,
        height: 5
      },
      {
        value: '6x6',
        width: 6,
        height: 6
      },
      {
        value: '7x7',
        width: 7,
        height: 7
      },
      {
        value: '8x8',
        width: 8,
        height: 8
      },
    ],
  },
  pointsToWin: {
    options: [
      {
        value: '20',
        pointsToWin: 20
      },
      {
        value: '40',
        pointsToWin: 40
      },
      {
        value: '50',
        pointsToWin: 50
      },
      {
        value: '60',
        pointsToWin: 60
      },
      {
        value: '80',
        pointsToWin: 80
      },
    ],
  },
  pointsToLose: {
    options: [
      {
        value: '5',
        pointsToLose: 5
      },
      {
        value: '10',
        pointsToLose: 10
      },
      {
        value: '15',
        pointsToLose: 15
      },
      {
        value: '20',
        pointsToLose: 20
      },
      {
        value: '25',
        pointsToLose: 25
      }
    ],
  }
}