import React from 'react';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';

import AuthRouter from './authRouter';
import PublicRoute from './routes/publicRoute';
import PrivateRoute from './routes/privateRoute';
import DashboardRouter from './dashboardRouter';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path={['/login', '/register']} component={AuthRouter} />
      <PrivateRoute path="/" component={DashboardRouter} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
