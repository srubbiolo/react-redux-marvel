import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MarvelHeroesHomePage from '../components/marvelHeroesHomePage';
const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route path="/heroApp/:hero?" component={MarvelHeroesHomePage}></Route>
      <Redirect from="" to="/heroApp"/>
      </Switch>
    </Router>
  )
}   

export default Routes;