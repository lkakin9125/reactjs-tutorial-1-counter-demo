import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Grid, Button } from 'semantic-ui-react'
import Counter from '../component/Counter';
class CounterContainer extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            counter: 0
        }
    }

    counterUpdate(step) {
        this.setState({ counter: this.state.counter + step })
    }

    render() {
        return (
            <Counter
                count={this.state.counter}
                increaseFunction={() => { this.counterUpdate(1) }}
                decreaseFunction={() => { this.counterUpdate(-1) }} />
        );
    }
}



export default CounterContainer;
