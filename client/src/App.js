import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './App.css';

export default () => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
);
