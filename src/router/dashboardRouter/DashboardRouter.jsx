import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Dashboard from '../../sections/dashboard';
import {TaskList, CreateTask} from '../../shared/components';

const DashboardRouter = () => (
  <Dashboard>
    <Switch>
      <Route exact path="/" component={TaskList} />
      <Route path="/create-task" component={CreateTask} />
      <Redirect to="/" />
    </Switch>
  </Dashboard>
);

export default DashboardRouter;
