import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setXCord, setYCord } from '../../../Redux/slices/gameSlice';
import { MAX_NUMBER, MIN_NUMBER } from '../../../utils/constants';

import './Settings.scss';

const Settings = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cordX, cordY } = useAppSelector((state) => state.game);

  const handleInputX = (e: InputEvent) => {
    const value = +e.target.value;
    dispatch(setXCord(value));
  };

  const handleInputY = (e: InputEvent) => {
    const value = +e.target.value;
    dispatch(setYCord(value));
  };

  return (
    <div className="settings">
      <div className="setting">
        <label>
          Введите минимальное чсило клеток по X:
          <input
            type="number"
            min={MIN_NUMBER}
            max={MAX_NUMBER}
            onChange={handleInputX}
            value={cordX}
          />
        </label>
      </div>
      <div className="setting">
        <label>
          Введите минимальное чсило клеток по Y:
          <input
            type="number"
            min={MIN_NUMBER}
            max={MAX_NUMBER}
            onChange={handleInputY}
            value={cordY}
          />
        </label>
      </div>
    </div>
  );
};

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default Settings;
