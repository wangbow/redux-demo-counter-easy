import React, { Component } from 'react';
import propTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                Clicked:{value}
                {'   '}
                <button onClick={onIncrement}>
                    +
                </button>
                {'   '}
                <button onClick={onDecrement}>
                    -
                </button>
            </div>

        )
    }
}

Counter.propTypes = {
    value: propTypes.number.isRequired,
    onIncrement: propTypes.func.isRequired,
    onDecrement: propTypes.func.isRequired
}

export default Counter;