import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Job from "./components/job";
import Projects from "./pages/projects";

const App = () => (
      <Router>
        <div>
          <Switch>
            <Route component={Projects} />
            <Route exact path="/" component={Projects} />
            <Route exact path="/job" component={Job} />
          </Switch>
        </div>
      </Router>

)

export default App;
