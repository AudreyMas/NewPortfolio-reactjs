import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/index.js';
import SignUp from './components/SignUp/index';
// import ProjectList from './components/Projects/ProjectsList/index';
import AdminProject from './components/AdminProject/index'
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';

import DetailsProject from './components/Projects/DetailsProject/index'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/projects" component={ProjectList} /> */}
          <Route exact path="/project-admin" component={AdminProject} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:name" component={DetailsProject} />

          <Route exact path="/contact" component={Contact} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
