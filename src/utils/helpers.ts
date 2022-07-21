import { CellI } from '../pages/Game/Cell/Cell';
import { Direction, DIRECTIONS, MIN_X, MIN_Y } from './constants';

export const getFieldArray = (x: number, y: number): CellI[][] => {
  const fieldArray = [];
  for (let i = 1; i <= x; i++) {
    const rowArray = [];
    for (let j = 1; j <= y; j++) {
      const elem = { x: i, y: j };
      rowArray.push(elem);
    }
    fieldArray.push(rowArray);
  }
  return fieldArray;
};

export const getRandomCoordinate = (xCord: number, yCord: number): CellI => {
  const coordinateX = Math.ceil(Math.random() * xCord);
  const coordinateY = Math.ceil(Math.random() * yCord);

  return { x: coordinateX, y: coordinateY };
};

export const getRandomDirection = (): Direction => {
  return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
};

export const getAnswerAndDirectoins = (
  start: CellI,
  xCord: number,
  yCord: number
): { startPosition: CellI; directions: Direction[] } => {
  const directions = [];
  const totalDirections = 10;
  const startPosition = { ...start };

  for (let i = 0; i < totalDirections; i++) {
    const direction = getRandomDirection();
    const { x, y } = direction.coords;
    const startX = startPosition.x + x;
    const startY = startPosition.y + y;

    if (startX > xCord || startY > yCord || startX < MIN_X || startY < MIN_Y) {
      const { direction, position } = getNewCords(startPosition, xCord, yCord);

      startPosition.x = position.x;
      startPosition.y = position.y;
      directions.push(direction);
    } else {
      startPosition.x = startX;
      startPosition.y = startY;
      directions.push(direction);
    }
  }

  return { startPosition, directions };
};

const getNewCords = (
  startPosition: CellI,
  xCord: number,
  yCord: number
): { position: CellI; direction: Direction } => {
  const direction = getRandomDirection();
  const { x, y } = direction.coords;
  const position = { ...startPosition };

  const startX = position.x + x;
  const startY = position.y + y;

  if (startX > xCord || startY > yCord || startX < MIN_X || startY < MIN_Y) {
    getNewCords(startPosition, xCord, yCord);
  } else {
    position.x = startX;
    position.y = startY;
  }

  return { position, direction };
};
