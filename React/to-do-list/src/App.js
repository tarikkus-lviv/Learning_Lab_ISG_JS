import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      newItem:'',
      list:[],
      key:''
    }
  }


  updateInput(event) {
    this.setState({
      key: event.target.value
    });
  }

  addItem = () => {
    // add id
    const newItem = {
      id: Math.ceil(Math.random() * 100),
      value: this.state.key
    };

    console.log(newItem);

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem:''
    });
  }

deleteItem(id) {
  const list = [...this.state.list];

  const updatedList = list.filter(item => item.id !== id);

  this.setState( {list: updatedList} )
}

  render() {
    return (
      <div className='To-do'>
        <div>
          Add your task
          <br/>
          <input 
            type='text' 
            placeholder='Type your task here' 
            value={this.state.key} 
            onChange={(e) => this.updateInput(e)}>
          </input>
          <button 
            onClick={this.addItem}>
              ADD
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}>
                      X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
