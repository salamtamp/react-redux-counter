import React from 'react';

const Counter = ({ count, increment, decrement }) => (
    <div>
        <h4 className="title is-4">count: {count}</h4>
        <button className="button is-primary is-rounded" onClick={increment}>
            <h5 className="title is-5">+</h5>
        </button>
        {' '}
        <button className="button is-danger is-rounded" onClick={decrement}>
            <h5 className="title is-5">-</h5>
        </button>
    </div>
)

export default Counter;