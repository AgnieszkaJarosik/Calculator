import React from 'react';

import './Display.css';

function Display(props) {
  return (
    <div id={props.toId} className={props.nameToClass} >
      {props.clicked!==undefined ? props.clicked : '0'}
    </div>
  );
}

export default Display;