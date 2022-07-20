import Button from '../../components/Button/Button';
import Settings from './Settings/Settings';

import './Main.scss';

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <Settings />
      <Button path="game">Start new game!</Button>
    </div>
  );
};

export default Main;
