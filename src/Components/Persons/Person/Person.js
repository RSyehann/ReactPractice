import React, { Component } from 'react';
import PropTypes from 'prop-types';


import classes from './Person.css';
import withClass from '../../../Hoc/withClass';
import Aux from '../../../Hoc/Aux';
import { AuthContext } from '../../../Containers/App';
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
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


    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
            this.inputElement.current.focus();
    }

    render () {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated!</p> : null }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        )
        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2" >{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};


export default withClass( Person, classes.Person );