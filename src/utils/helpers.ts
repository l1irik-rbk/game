import { CellI } from '../pages/Game/Cell/Cell';
import { X, Y, DIRECTIONS } from './constants';

export const getFieldArray = (x: number, y: number) => {
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

export const getRandomCoordinate = () => {
  const coordinateX = Math.ceil(Math.random() * X);
  const coordinateY = Math.ceil(Math.random() * Y);

  return { x: coordinateX, y: coordinateY };
};

export const getRandomDirection = () => {
  return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
};

export const getAnswerAndDirectoins = (start: CellI) => {
  const directions = [];
  const totalDirections = 10;
  const startPosition = { ...start };

  for (let i = 0; i < totalDirections; i++) {
    const direction = getRandomDirection();
    const { x, y } = direction.coords;
    const startX = startPosition.x + x;
    const startY = startPosition.y + y;

    if (startX > X || startY > Y || startX < 1 || startY < 1) {
      const { direction, position } = getNewCords(startPosition);

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

const getNewCords = (startPosition: CellI) => {
  const direction = getRandomDirection();
  const { x, y } = direction.coords;
  const position = { ...startPosition };

  const startX = position.x + x;
  const startY = position.y + y;

  if (startX > X || startY > Y || startX < 1 || startY < 1) {
    getNewCords(startPosition);
  } else {
    position.x = startX;
    position.y = startY;
  }

  return { position, direction };
};
