import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchText from './SearchText';
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input
          className="search"
          type="text"
          placeholder="Start searching"
          onChange={e => SearchText.searchText = e.target.value}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text>Welcome to React</Text>
        </div>
        <Text className="App-intro">
          To get started, edit src/App.js and save to reload.
        </Text>
        <p className="react">
          <h3><Text>A Simple Component</Text></h3>
          <Text>
            React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

            JSX is optional and not required to use React. Try clicking on "Compiled JS" to see the raw JavaScript code produced by the JSX compiler.
          </Text>
          <h3><Text>A Stateful Component</Text></h3>
          <Text>
            In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component's state data changes, the rendered markup will be updated by re-invoking render().
          </Text>
          <h3><Text>An Application</Text></h3>
          <Text>
            Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.
          </Text>
        </p>
      </div>
    );
  }
}

export default App;
