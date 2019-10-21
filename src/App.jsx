import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './app/utils/history';
import Home from './app/containers/home';
import Redirect from './app/containers/redirect';
import './app/styles/App.scss';
import Contacts from './app/containers/contacts';


const app = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/redirect" component={Redirect} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </Router>
);

export default app;
