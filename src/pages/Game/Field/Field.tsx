import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setAnswer, setDirections, setField, setStart } from '../../../Redux/slices/gameSlice';
import { getAnswerAndDirectoins, getFieldArray, getRandomCoordinate } from '../../../utils/helpers';
import Cell, { CellI } from '../Cell/Cell';

import './Field.scss';

const Field = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { field, cordX, cordY } = useAppSelector((state) => state.game);

  useEffect(() => {
    getField();
  }, []);

  const getField = () => {
    const field: CellI[][] = getFieldArray(cordX, cordY);
    const start: CellI = getRandomCoordinate(cordX, cordY);
    const { startPosition: answer, directions } = getAnswerAndDirectoins(start, cordX, cordY);

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
