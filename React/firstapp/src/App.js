import React from 'react'
import './App.css';
import Counter from './components/Counter.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  setCounter = (number) => {
    this.setState( {count: this.state.count + number} )
  }

  render() {
    return(
      <div className='container'>
        <h1>React Number Counter</h1>
        <div className='countContainer'>
          {this.state.count}
        </div>
        <div className='buttons'>
          <button number = {1} counterFunction = {this.setCounter}/>
          <button number = {3} counterFunction = {this.setCounter}/>
          <button number = {5} counterFunction = {this.setCounter}/>
        </div>
      </div>
    );
  }
}

export default App;
