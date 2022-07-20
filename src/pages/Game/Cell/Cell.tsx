import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setGameFinish, showCorrectAnswer } from '../../../Redux/slices/gameSlice';
import './Cell.scss';

const Cell = ({ x, y }: CellI) => {
  const [newClass, setNewClass] = useState('ceil');

  const dispatch = useAppDispatch();
  const { start, answer, correctAnswer, gameFinish } = useAppSelector((state) => state.game);

  const condition = answer?.x === x && answer?.y === y;

  useEffect(() => {
    if (correctAnswer && condition) {
      setNewClass('ceil ceil--correct');
    }
  }, [correctAnswer]);

  const selectAnswer = () => {
    if (gameFinish) return;

    if (condition) {
      setNewClass('ceil ceil--correct');
      dispatch(setGameFinish(true));
    } else {
      setNewClass('ceil ceil--wrong');
      dispatch(showCorrectAnswer(true));
      dispatch(setGameFinish(true));
    }
  };

  return (
    <div className={newClass} onClick={selectAnswer}>
      {start?.x === x && start?.y === y && 'Start'}
    </div>
  );
};

export interface CellI {
  x: number;
  y: number;
}

export default Cell;
