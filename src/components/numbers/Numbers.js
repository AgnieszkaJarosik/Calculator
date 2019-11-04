import React from 'react';
import Number from '../number/Number';
import Decimal from '../decimal/Decimal';

import './Numbers.css';

function Numbers(props) {

  return (
    <div className="numbers">
      {props.numbers.map( (number, id) => {
        if (id===0) {
          return <div className="zeroContainer">
                    <Number id={number.id}
                            value={number.value}
                            key={id} 
                            clickHandler={props.clickHandler} />
                    <Decimal clickHandler={props.decimalClickHandler} />
                    <div className="break"></div>
            </div>
          } else {
            return <Number id={number.id}
                            value={number.value}
                            key={id}
                            clickHandler={props.clickHandler} />
          }
        }  
      )}
    </div>
  );
}

export default Numbers;