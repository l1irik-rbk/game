import Directions from './Directions/Directions';
import Field from './Field/Field';

import './Game.scss';

const Game = () => {
  return (
    <div className="game">
      <Field />
      <Directions />
    </div>
  );
};

export default Game;
