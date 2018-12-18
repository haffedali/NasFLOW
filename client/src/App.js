import React, { Component } from 'react';
import './App.css';
import Job from "./components/job"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Job />
        {/* <header className="App-header">
          NASFLOW
        </header> */}
      </div>
    );
  }
}

export default App;
