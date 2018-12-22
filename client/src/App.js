import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Job from "./components/job"
import JobColumn from "./components/jobcolumn"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={JobColumn} />
            <Route exact path="/job" component={Job} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
