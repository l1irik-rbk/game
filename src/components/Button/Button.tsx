import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../Redux/hooks';
import { setGameFinish, showCorrectAnswer } from '../../Redux/slices/gameSlice';

import './Button.scss';

const Button = ({ children, path }: { children: React.ReactNode; path: string }): JSX.Element => {
  const dispatch = useAppDispatch();

  const btnClick = () => {
    dispatch(setGameFinish(false));
    dispatch(showCorrectAnswer(false));
  };

  return (
    <Link to={path}>
      <button className="button" onClick={btnClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
