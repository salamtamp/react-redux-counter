import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <h4 class="title is-4">count: {count}</h4>
                <a class="button is-primary is-rounded" onClick={this.increment}>
                    <h5 class="title is-5">+</h5>
                </a>
                {' '}
                <a class="button is-danger is-rounded" onClick={this.decrement}>
                    <h5 class="title is-5">-</h5>
                </a>
            </div>
        );
    }
}

export default Counter;