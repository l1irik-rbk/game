import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setAnswer, setDirections, setField, setStart } from '../../../Redux/slices/gameSlice';
import { X, Y } from '../../../utils/constants';
import { getAnswerAndDirectoins, getFieldArray, getRandomCoordinate } from '../../../utils/helpers';
import Cell, { CellI } from '../Cell/Cell';

import './Field.scss';

const Field = () => {
  const dispatch = useAppDispatch();
  const { field } = useAppSelector((state) => state.game);

  useEffect(() => {
    getField();
  }, []);

  const getField = () => {
    const field: CellI[][] = getFieldArray(X, Y);
    const start: CellI = getRandomCoordinate();
    const { startPosition: answer, directions } = getAnswerAndDirectoins(start);

    dispatch(setField(field));
    dispatch(setStart(start));
    dispatch(setAnswer(answer));
    dispatch(setDirections(directions));
  };

  return (
    <div className="field">
      {field.map((row, index) => (
        <div className="row" key={index}>
          {row.map(({ x, y }, ceilIndex) => (
            <Cell key={ceilIndex} x={x} y={y} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
