import { CellI } from '../pages/Game/Cell/Cell';

export const DIRECTIONS = [
  { name: 'Left', coords: { x: -1, y: 0 } },
  { name: 'Right', coords: { x: 1, y: 0 } },
  { name: 'Down', coords: { x: 0, y: 1 } },
  { name: 'Up', coords: { x: 0, y: -1 } },
];

export const X = 3;
export const Y = 3;

export interface Direction {
  name: string;
  coords: CellI;
}
