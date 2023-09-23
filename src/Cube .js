import React, { useState } from 'react';
import './Cube.css';
import Kishan from './Kishan.png';

const Cube = ({ imageSrc, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCubeClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`cube-container ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCubeClick}
    >
      <div className="cube">
        <div className="front">
          <img src={Kishan} alt="Front" />
        </div>
        <div className="back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Cube;