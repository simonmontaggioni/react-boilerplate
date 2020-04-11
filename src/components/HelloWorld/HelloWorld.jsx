import React from 'react';
import './HelloWorld.scss';
import worldImage from '../../assets/static/images/world.png';

const HelloWorld = () => {
  return (
    <div>
      <p>Hello World</p>
      <div>
        <img src={worldImage} alt="world" />
      </div>
    </div>
  );
};

export default HelloWorld;
