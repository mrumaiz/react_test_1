import React from 'react';
import ReactDOM from 'react-dom';
import UserLogin from '../pages/UserLogin/UserLogin';
import  SignUp from '../pages/SignUp/SignUp';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const AppRoute = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={UserLogin} />
                <Route path="/signUp" component={SignUp} />
            </Switch>
        </div>
        
    </Router>
  );

export default AppRoute;