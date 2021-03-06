import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../Hoc/Aux';
import withClass from '../Hoc/withClass';

export const AuthContext = React.createContext();

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'asfa1',name: 'Max', age: 28 },
        { id: 'dgssad',name: 'Manu', age: 29 },
        { id: 'qwe1c',name: 'Stephanie', age: 31 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponetUpdate( nextProps, nextState ) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  //   // return true;
  //   // if it return true the process continue,
  //   // but if it return false we stop the whole process.
  // }

  componentWillUpdate( nextProps, nextState ) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static  getDerivedStateFromProps( nextProps, prevState ) {
    console.log(
      "[Update App.js] Inside getDerivedStateFromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log(
      "[Update App.js] Inside getDerivedStateFromProps"
    )
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate');
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
    console.log('[App.js] Inside render()');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
      );
    }

    return (
          <Aux>
            <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
            <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showpersons} 
              persons={this.state.persons}
              login={this.loginHandler}
              clicked={this.togglePersonsHandler} 
            />
              <AuthContext.Provider value={this.state.authenticated}>
              {persons}
              </AuthContext.Provider>
          </Aux>
    );
    // return React.createElement('div', {className: 'App.js'}, React)
  }
}

export default withClass(App, classes.App);
