import React from 'react';
import Displayers from '../displayers/Displayers';
import Clear from '../clear/Clear';
import Operations from '../operations/Operations';
import Numbers from '../numbers/Numbers';
import Calculate from '../calculate/Calculate';
import {numberKeys, operationKeys} from './keys';
import './Calculator.css';

class Calculator extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      numbers: numberKeys,
      operations: operationKeys,
      x: 0,
      buffer: 0,
      operation: '',
      lastOperation: null,
      lastPressed: null,
      isDecimalClicked: false
    }

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperationClick = this.handleOperationClick.bind(this);
    this.handleCalculateClick = this.handleCalculateClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleDecimalClick = this.handleDecimalClick.bind(this);
  }

  handleNumberClick (value) {
    if(parseFloat(this.state.buffer)===0 && value==='0') {
      return;
    } else {
      if (this.state.buffer===0) {
        this.setState({ buffer: value,
                        lastPressed: 'number'
                      })
      } else if (this.state.lastPressed ==='equals') {
        this.setState({ x: this.state.buffer,
                        buffer: value,
                        lastPressed: 'number'
                      })
      } else {
        this.setState({ buffer: this.state.buffer + value,
                        lastPressed: 'number'
                      })
      }
    }
  }

  handleOperationClick (index) {
    if (this.state.lastPressed==='operation' && this.state.operations[index].id!=='subtract' ){
      this.setState({ lastOperation: this.state.operations[index].operation,
                      buffer:''
                   })
    } else if (this.state.lastPressed==='operation' && this.state.operations[index].id==='subtract') {
      this.setState({ buffer: '-' })
    } else {
      const result = this.state.lastOperation===null ? this.state.buffer : 
      this.state.lastOperation(parseFloat(this.state.x), parseFloat(this.state.buffer));
    
      this.setState({ lastOperation: this.state.operations[index].operation,
                      x: result,
                      operation: result + this.state.operations[index].sign + '',
                      buffer: 0,
                      lastPressed: 'operation',
                      isDecimalClicked: false
                    })
    }
  }

  handleCalculateClick () {
    const result = this.state.lastOperation===null ? this.state.buffer : 
    this.state.lastOperation(parseFloat(this.state.x), parseFloat(this.state.buffer));

    this.setState({ x: 0,
                    buffer: result,
                    operation: null,
                    lastOperation: null,
                    lastPressed: 'equals',
                    isDecimalClicked: false
                  })
  }

  handleClearClick () {
    this.setState({ x: 0,
                    buffer: 0,
                    operation: null,
                    lastOperation: null,
                    lastPressed: null,
                    isDecimalClicked: false
                  })
  }

  handleDecimalClick () {
    if(this.state.isDecimalClicked===true) {
      return;
    } else {
      this.setState({ buffer: this.state.buffer + '.',
                      isDecimalClicked: true
                    })
    }    
  }

  render () {
    return (
        <div className="calculator">
          <Displayers operation={this.state.operation}
                      buffer={this.state.buffer} />
          <Clear clickHandler={this.handleClearClick} />
          <Operations operations={this.state.operations} 
                      clickHandler={this.handleOperationClick} />
          <Numbers numbers={this.state.numbers}
                    clickHandler={this.handleNumberClick}
                    decimalClickHandler={this.handleDecimalClick} />
          <Calculate clickHandler={this.handleCalculateClick} />
        </div>
    );
  }
}

export default Calculator;
