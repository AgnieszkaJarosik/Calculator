import React from 'react';

import './Clear.css';

function Clear(props) {

  return (
    <div id="clear" onClick={props.clickHandler} >
     AC
    </div>
  );
}

export default Clear;