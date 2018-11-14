import React, { Component } from 'react';

import classes from './Person.css';
import WithClass from '../../../Hoc/WithClass';
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    componentWillReceive( nextProps ) {
        console.log('[Update Person.js] Inside componentWillReceiveProps', nextProps);
    }

    shouldComponetUpdate( nextProps, nextState ) {
        console.log('[Update Persons.js] Inside ');
    }

    componentWillUpdate() {
        console.log('[Update Person.js]  ')
    }

    render () {
        console.log('[Person.js] Inside render()');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </WithClass>
        )
        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2" >{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
    }
}


export default Person;