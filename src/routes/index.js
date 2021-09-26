import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Profiler from '../pages/profiler';
import Episodes from '../pages/episodes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/breakingbadapi" component={Home} />
      <Route exact path="/detalhes" component={Profiler} />
      <Route exact path="/episodios" component={Episodes} />
      <Redirect to="/breakingbadapi" />
    </Switch>
  );
}
