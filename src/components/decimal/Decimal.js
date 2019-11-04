import React from 'react';

function Decimal(props) {

  return (
    <div id="decimal" className="number" onClick={props.clickHandler} >
      .
    </div>
  );
}

export default Decimal;