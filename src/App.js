import React from 'react';
import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import { BUTTONS, OPERATORS } from './shared/buttons';
import { evaluate} from 'mathjs/lib/browser/math.js'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      equation: "",
      result: "0"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(input) {
    
    if(this.state.result === "0" && input !== ".") { // don't allow 0 in the beginning except if the input in the decimal
      this.setState({
        result: ""
      });
    }
    
    if(input === "AC") { // clear button is pressed
      this.setState({
        equation: "",
        result: "0"
      });
    }
    
    else if (input === '=') { // = is pressed, evaluate the input equation
      this.setState(state => {
        return {
          equation: state.equation + "=",
          result: evaluate(state.equation.split('x').join('*'))
        }
      })
    }
    
    else if(OPERATORS.indexOf(input) !== -1) { // operator is pressed
      this.setState(state => {

        let eq;
        const lastChar = state.equation.charAt(state.equation.length-1);

        if(lastChar === "=") { // operator is pressed right after an evaluation ( after = is pressed)
          eq = state.result + input;
        } 
        else if (OPERATORS.slice(1).indexOf(input) !== -1 && OPERATORS.indexOf(lastChar) !== -1) {
          // operator other than substract is pressed after another operator
          eq = state.equation.slice(0, -1) + input;
        }
        else {
          eq = state.equation + input;
        }

        return {
          equation: eq,
          result: input
        }
      });
    }

    else if(this.state.result.indexOf(".") !== -1 && input === ".") { // decimal point is pressed while the number already contain one
      // ignore the input
    }

    else {
      this.setState(state => {
        let res;
        if(OPERATORS.indexOf(state.result) !== -1) {
          res = input;
        } else {
          res = state.result + input;
        }
        return {
          equation: state.equation + input,
          result: res
        }
      });
    }
    const lastIdx = this.state.equation.length-1;
    if (OPERATORS.slice(1).indexOf(this.state.equation.charAt(lastIdx)) !== -1 && OPERATORS.indexOf(this.state.equation.charAt(lastIdx-1)) !== -1) {
      this.setState(state => {
        return {
          equation: state.equation.slice(0, lastIdx-1) + state.equation.slice(lastIdx)
        }
      })
    }
  }

  render(){
    const calcButtons = BUTTONS.map(button => <Button key={button.content} clickHandler={this.clickHandler} content={button.content} area={button.area} color={button.color} />)
    return (
    <div className="d-flex align-items-center justify-content-center app-container">
      <div className="calc-styles">
      <Screen temp={this.state.equation} result={this.state.result}/>
      {calcButtons}
      </div>
    </div>
  )}
}

export default App;
