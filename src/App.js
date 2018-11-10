import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="notification">
          <h1 className="title is-1">Hello, React!</h1>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
