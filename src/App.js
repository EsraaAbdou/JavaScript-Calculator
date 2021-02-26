import React from 'react';
import './App.css';
import Button from './components/button';
import Screen from './components/screen';
import {BUTTONS} from './shared/buttons'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {

  }

  render(){
    const calcButtons = BUTTONS.map(button => <Button key={button.content} clickHandler={this.clickHandler} content = {button.content} area={button.area} color={button.color} />)
    return (
    <div className="d-flex align-items-center justify-content-center app-container">
      <div className="calc-styles">
      <Screen temp={this.state.operation} result={this.state.result}/>
      {calcButtons}
      </div>
    </div>
  )}
}

export default App;
