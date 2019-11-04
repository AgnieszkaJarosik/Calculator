import React from 'react';

import './Calculate.css';

function Calculate(props) {

  return (
    <div id="equals" onClick={props.clickHandler} >
     =
    </div>
  );
}

export default Calculate;