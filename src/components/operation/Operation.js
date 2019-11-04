import React from 'react';

import './Operation.css';

function Operation(props) {
  const handleClick = () => {
    props.clickHandler(props.index);
  }

  return (
    <div id={props.id} 
        className={props.id==='add' ? "operation plus" : "operation"}
        onClick={handleClick}>
      {props.sign}
    </div>
  );
}

export default Operation;