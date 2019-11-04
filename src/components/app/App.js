import React from 'react';
import Displayers from '../displayers/Displayers';
import Clear from '../clear/Clear';
import Operations from '../operations/Operations';
import Numbers from '../numbers/Numbers';
import Calculate from '../calculate/Calculate';
import {numberKeys, operationKeys} from './keys';
import './App.css';

class App extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      numbers: numberKeys,
      operations: operationKeys,
      x: 0,
      buffer: '0',
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
    if(this.buffer==='0' && value===0) {
      return;
    } else {
      this.setState({ buffer: this.state.buffer==='0' ? value : this.state.buffer + value,
                      lastPressed: 'number' });
    }
  }

  handleOperationClick (index) {
    if (this.lastPressed==='operation' && this.state[index].id!=='subtract'){
      return;
    } else {
      const result = this.state.lastOperation===null ? this.state.buffer : 
      this.state.lastOperation(parseFloat(this.state.x), parseFloat(this.state.buffer));
    
      this.setState({ lastOperation: this.state.operations[index].operation,
                      x: result,
                      operation: result + this.state.operations[index].sign + '',
                      buffer: '',
                      lastPressed: 'operation',
                      isDecimalClicked: false
                    })
    }
  }

  handleCalculateClick () {
    const result = this.state.lastOperation===null ? this.state.buffer : 
      this.state.lastOperation(parseFloat(this.state.x), parseFloat(this.state.buffer));

    this.setState({ operation: '',
                    buffer: result,
                    lastPressed: 'equals',
                    x: 0,
                    isDecimalClicked: false
                  })
  }

  handleClearClick () {
    this.setState({ x: 0,
                    buffer: '0',
                    operation: '',
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
      <div className="App">
        <div className="calculator">
          <Displayers operation={this.state.operation}
                      x={this.state.x}
                      buffer={this.state.buffer} />
          <Clear clickHandler={this.handleClearClick} />
          <Operations operations={this.state.operations} 
                      clickHandler={this.handleOperationClick} />
          <Numbers numbers={this.state.numbers}
                    clickHandler={this.handleNumberClick}
                    decimalClickHandler={this.handleDecimalClick} />
          <Calculate clickHandler={this.handleCalculateClick} />
        </div>
      </div>
    );
  }
}

export default App;
