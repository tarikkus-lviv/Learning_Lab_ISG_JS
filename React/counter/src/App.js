import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counter: Number(0),
    };
  }

  add5 = () =>{
    this.setState({
      counter: this.state.counter + 5,
    })
  }
  add7 = () =>{
    this.setState({
      counter: this.state.counter + 7,
    })
  }
  add9 = () =>{
    this.setState({
      counter: this.state.counter + 9,
    })
  }
  reset = () =>{
    this.setState({
      counter: Number(0),
    })
  }
  

  render() {
    return (
      <div className='container'>
        <h1 className="counter">Counter: {this.state.counter}</h1>
          <div className='buttons'>
            <button className='adding' onClick={this.add5}>Plus 5</button>
            <button className='adding' onClick={this.add7}>Plus 7</button>
            <button className='adding' onClick={this.add9}>Plus 9</button>
            <button className='resetting' onClick={this.reset}>Reset</button>
          </div>
        </div>
    )
  }
}
 
export default App;