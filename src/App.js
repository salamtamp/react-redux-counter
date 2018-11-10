import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="notification">
          <h1 class="title is-1">Hello, React!</h1>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
