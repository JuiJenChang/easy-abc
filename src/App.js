import React, {Component} from 'react';
import './App.css';
import EasyABC from './EasyABC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Easy ABC</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <EasyABC />
      </div>
    );
  }
}

export default App;
