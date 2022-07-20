import { useAppSelector } from '../../../Redux/hooks';

import './Directions.scss';

const Directions = () => {
  const { directions } = useAppSelector((state) => state.game);

  return (
    <div className="directions">
      {directions.map((direction, index) => (
        <div className="direction" key={index}>
          {direction.name}
        </div>
      ))}
    </div>
  );
};

export default Directions;
