import { CellI } from '../pages/Game/Cell/Cell';

export const DIRECTIONS: Direction[] = [
  { name: 'Left', coords: { x: -1, y: 0 } },
  { name: 'Right', coords: { x: 1, y: 0 } },
  { name: 'Down', coords: { x: 0, y: 1 } },
  { name: 'Up', coords: { x: 0, y: -1 } },
];

export interface Direction {
  name: string;
  coords: CellI;
}
