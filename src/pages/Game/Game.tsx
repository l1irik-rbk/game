import Button from '../../components/Button/Button';
import Directions from './Directions/Directions';
import Field from './Field/Field';

import './Game.scss';

const Game = (): JSX.Element => {
  return (
    <div className="game">
      <Field />
      <Button path="/">Try again!</Button>
      <Directions />
    </div>
  );
};

export default Game;
