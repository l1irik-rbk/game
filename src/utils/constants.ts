import { CellI } from '../pages/Game/Cell/Cell';

export const DIRECTIONS: Direction[] = [
  { name: 'Left', coords: { x: -1, y: 0 } },
  { name: 'Right', coords: { x: 1, y: 0 } },
  { name: 'Down', coords: { x: 0, y: 1 } },
  { name: 'Up', coords: { x: 0, y: -1 } },
];

export const MIN_NUMBER = 3;
export const MAX_NUMBER = 20;

export const MIN_X = 1;
export const MIN_Y = 1;

export interface Direction {
  name: string;
  coords: CellI;
}
