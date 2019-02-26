import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="cog" />
          <h4><code>Coming Soon ..</code></h4>
          <p><code className="title">chriswatson.tech</code></p>
          <div className="links">
            <a className="App-link" href="https://twitter.com/yowats0n" target="_blank" rel="noopener noreferrer"> 
              <i class="fab fa-twitter-square"></i> 
            </a>
            <a className="App-link" href="https://github.com/christopher-watson" target="_blank" rel="noopener noreferrer"> 
              <i class="fab fa-github-square"></i> 
            </a>
            <a className="App-link" href="http://christopherwatson.co" target="_blank" rel="noopener noreferrer"> 
              <i class="fas fa-external-link-square-alt"></i> 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
