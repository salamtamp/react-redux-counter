import React, { Component } from 'react';

const Counter = ({ count, increment, decrement }) => (
    <div>
        <h4 class="title is-4">count: {count}</h4>
        <a class="button is-primary is-rounded" onClick={increment}>
            <h5 class="title is-5">+</h5>
        </a>
        {' '}
        <a class="button is-danger is-rounded" onClick={decrement}>
            <h5 class="title is-5">-</h5>
        </a>
    </div>
)

export default Counter;