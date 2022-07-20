import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setXCord, setYCord } from '../../../Redux/slices/gameSlice';

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
          <input type="number" min={3} max={20} onChange={handleInputX} value={cordX} />
        </label>
      </div>
      <div className="setting">
        <label>
          Введите минимальное чсило клеток по Y:
          <input type="number" min={3} max={20} onChange={handleInputY} value={cordY} />
        </label>
      </div>
    </div>
  );
};

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default Settings;
