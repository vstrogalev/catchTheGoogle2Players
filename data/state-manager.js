import { DIRECTIONS, GAME_STATUSES, PLAYERS } from "./constants.js";

// TODO: change points structure
const _state = {
  gameStatus: GAME_STATUSES.SETTINGS,
  points: {
    google: 0,
    players: {
      [PLAYERS.PLAYER1]: { value: 0 },
      [PLAYERS.PLAYER2]: { value: 0 },
    },
  },
  settings: {
    pointsToLose: 30,
    pointsToWin: 5,
    gridSize: {
      width: 4,
      height: 4,
    },
  },
  positions: {
    google: {
      x: 0,
      y: 0,
    },
    players: {
      [PLAYERS.PLAYER1]: { x: 1, y: 0 },
      [PLAYERS.PLAYER2]: { x: 1, y: 1 },
    },
  },
};

let _observer = () => {};

export function subscribe(
  subscriberListenerObserverCallbackEventHandlerConsumer
) {
  _observer = subscriberListenerObserverCallbackEventHandlerConsumer;
}

function _getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function _setGooglePosition(newX, newY) {
  _state.positions.google.x = newX;
  _state.positions.google.y = newY;
}

function _moveGoogleToRandomPosition() {
  const newX = _getRandomInt(_state.settings.gridSize.width);
  const newY = _getRandomInt(_state.settings.gridSize.height);

  if (_isCellOccupiedByGoogle({ x: newX, y: newY })) {
    _moveGoogleToRandomPosition();
    return;
  }

  if (_isCellOccupiedByPlayer({ x: newX, y: newY })) {
    _moveGoogleToRandomPosition();
    return;
  }

  _setGooglePosition(newX, newY);
}
let _intervalId;

function _play() {
  _intervalId = setInterval(() => {
    _state.points.google++;

    if (_state.points.google === _state.settings.pointsToLose) {
      clearInterval(_intervalId);
      _state.gameStatus = GAME_STATUSES.LOSE;
    } else {
      _moveGoogleToRandomPosition();
    }

    _observer();
  }, 3000);
}

// TODO move to Play component
// _play();

function _catchGoogle(playerId) {
  const points = _state.points.players[playerId];
  points.value++;
  if (points.value === _state.settings.pointsToWin) {
    clearInterval(_intervalId);
    _state.gameStatus = GAME_STATUSES.WIN;
  } else {
    _moveGoogleToRandomPosition();
    clearInterval(_intervalId);
    _play();
  }
  _observer();
}

// getter/selector/query/CQS/mapper
export function getPoints() {
  return {
    google: _state.points.google,
    players: Object.values(_state.points.players).map((points) => {
      return { ...points };
    }),
  };
}

export function getGameStatus() {
  return _state.gameStatus;
}

export function getGridSize() {
  return {
    height: _state.settings.gridSize.height,
    width: _state.settings.gridSize.width,
  };
}

export function getGooglePosition() {
  return {
    x: _state.positions.google.x,
    y: _state.positions.google.y,
  };
}
export function getPlayerPositions() {
  return Object.values(_state.positions.players).map((position) => {
    return { ...position };
  });
}

// setter/command/mutation/side-effect
export function playAgain() {
  _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
  _state.points.google = 0;
  Object.values(_state.points.players).forEach(player => player.value = 0);
  _play();
  _observer();
}

export function movePlayer(id, direction) {
  const position = _state.positions.players[id];
  const newPosition = { ...position };

  const updater = {
    [DIRECTIONS.UP]: () => newPosition.y--,
    [DIRECTIONS.DOWN]: () => newPosition.y++,
    [DIRECTIONS.LEFT]: () => newPosition.x--,
    [DIRECTIONS.RIGHT]: () => newPosition.x++,
  };
  updater[direction]();

  // guard/validators/checker/
  if (!_isWithinBounds(newPosition)) return;
  if (_isCellOccupiedByPlayer(newPosition)) return;

  if (_isCellOccupiedByGoogle(newPosition)) {
    _catchGoogle(id);
  }

  _state.positions.players[id] = newPosition;
  _observer();
}

function _isWithinBounds(positions) {
  const { x, y } = positions;
  if (x < 0 || x > _state.settings.gridSize.width - 1) return false;
  if (y < 0 || y > _state.settings.gridSize.height - 1) return false;

  return true;
}

function _isCellOccupiedByPlayer({ x, y }) {
  if (x === getPlayerPositions()[0].x && y === getPlayerPositions()[0].y) {
    return true;
  }
  if (x === getPlayerPositions()[1].x && y === getPlayerPositions()[1].y) {
    return true;
  }
  return false;
}
function _isCellOccupiedByGoogle({ x, y }) {
  if (x === getGooglePosition().x && y === getGooglePosition().y) {
    return true;
  }
  return false;
}

export function getPointsTo() {
  return {
    pointsToWin: _state.settings.pointsToWin,
    pointsToLose: _state.settings.pointsToLose,
  };
}