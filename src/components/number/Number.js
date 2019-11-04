import React from 'react';

import './Number.css';

function Number(props) {
  const handleClick = () => {
    props.clickHandler(props.value+"");
  }

  return (
    <div  id={props.id}
          className={props.id==='zero' ? "zero number" : "number"} 
          onClick={handleClick} >
     {props.value}
    </div>
  );
}

export default Number;