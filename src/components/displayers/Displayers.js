import React from 'react';
import Display from '../display/Display';

import './Displayers.css';

function Displayers(props) {
  return (
    <div id="displayers">
      <Display clicked={props.operation} nameToClass="minorDisplayer" />
      <Display clicked={props.buffer} nameToClass="mainDisplayer" />
    </div>
  );
}

export default Displayers;