import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1',name: 'Max', age: 28 },
      { id: 'dgssad',name: 'Manu', age: 29 },
      { id: 'qwe1c',name: 'Stephanie', age: 31 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //Don't Do this: this.state.persons[0].name = 'Maximilion'
    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]
  } )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });


    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} ) 
  }

  render() {
    let persons = null;

    if ( this.state.showPersons) {
      persons = 
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>;
    }

    return (
        <div className={classes.App}>
            <Cockpit 
              showPersons={this.state.showpersons} 
              persons={this.state.persons}
              clicked={this.togglePersonsHandler} />
            {persons} 
        </div> 
    );
    // return React.createElement('div', {className: 'App.js'}, React)
  }
}

export default App;
