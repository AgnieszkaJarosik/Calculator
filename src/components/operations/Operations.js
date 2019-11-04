import React from 'react';
import Operation from '../operation/Operation';

import './Operations.css';

function Operations(props) {
  return (
    <div className="operations">
      {props.operations.map( (operation, id) => {
        if (operation.sign==='+') {
          return <div className="plusContainer">
                  <Operation id={operation.id}
                            sign={operation.sign}
                            index={operation.index}
                            key={id}
                            clickHandler={props.clickHandler} />
                  <div className="operation">:)</div>
                </div>
        } else {
          return <Operation id={operation.id}
                            sign={operation.sign}
                            index={operation.index}
                            key={id}
                            clickHandler={props.clickHandler} />
        }
      })}
    </div>
  );
}

export default Operations;