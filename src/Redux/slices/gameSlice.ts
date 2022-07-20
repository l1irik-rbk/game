import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellI } from '../../pages/Game/Cell/Cell';
import { Direction } from '../../utils/constants';

type Game = {
  field: CellI[][];
  start: CellI | null;
  answer: CellI | null;
  directions: Direction[];
  correctAnswer: boolean;
  gameFinish: boolean;
  cordX: number;
  cordY: number;
};

const initialState: Game = {
  field: [],
  start: null,
  answer: null,
  directions: [],
  correctAnswer: false,
  gameFinish: false,
  cordX: 3,
  cordY: 3,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<CellI[][]>) => {
      state.field = action.payload;
    },
    setStart: (state, action: PayloadAction<CellI | null>) => {
      state.start = action.payload;
    },
    setAnswer: (state, action: PayloadAction<CellI | null>) => {
      state.answer = action.payload;
    },
    setDirections: (state, action: PayloadAction<Direction[]>) => {
      state.directions = action.payload;
    },
    showCorrectAnswer: (state, action: PayloadAction<boolean>) => {
      state.correctAnswer = action.payload;
    },
    setGameFinish: (state, action: PayloadAction<boolean>) => {
      state.gameFinish = action.payload;
    },
    setXCord: (state, action: PayloadAction<number>) => {
      state.cordX = action.payload;
    },
    setYCord: (state, action: PayloadAction<number>) => {
      state.cordY = action.payload;
    },
  },
});

export const {
  setField,
  setStart,
  setAnswer,
  setDirections,
  showCorrectAnswer,
  setGameFinish,
  setXCord,
  setYCord,
} = gameSlice.actions;
