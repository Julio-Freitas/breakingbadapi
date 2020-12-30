import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Profiler from '../pages/profiler';
import Episodes from '../pages/episodes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detalhes" component={Profiler} />
      <Route exact path="/episodios" component={Episodes} />
    </Switch>
  );
}
