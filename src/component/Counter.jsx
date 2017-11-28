import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Segment } from 'semantic-ui-react'

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h2 className="margin-left-10">Counter</h2>,
            <Segment style={{ margin: 10 }}>
                <Grid verticalAlign="middle" textAlign="center" columns={16}>
                    <Grid.Column mobile={16} computer={12}>
                        {this.props.count}
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={4}>
                        <Button.Group >
                            <Button negative onClick={this.props.decreaseFunction}>-</Button>
                            <Button.Or />
                            <Button positive onClick={this.props.increaseFunction}>+</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid>
            </Segment>
        ];
    }
}

Counter.propTypes = {
    count: PropTypes.number,
    increaseFunction: PropTypes.func,
    decreaseFunction: PropTypes.func,
}

Counter.defaultProps = {
    count: 0
}

export default Counter;
