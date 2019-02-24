import React, { Component } from 'react';
import Person from './Person/Person';

//I imported
import {Link} from 'react-router';



import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Menu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Oirah', age: 29},
        {name: 'Stephanie', age: 27}
      ],
      otherState: 'some other value'
    })
  }

  nameChangedHandler = (event) => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        {name: 'Nolram', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27}
      ],
      otherState: 'some other value'
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>sample hello</h1>
        <p>This is sample content</p>

        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Swicth Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Marlon!!')}
          changed={this.nameChangedHandler}>My hobbies are ambot</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
