import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default function App({ history, onSignIn }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}
