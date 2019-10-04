import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import * as edamamAPI from '../src/services/edamam-api';
import logo from './logo.svg';
import './App.css';
import { read } from 'fs';
import DayView from '../src/pages/DayView/DayView';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import RecipeSearch from '../src/pages/RecipeSearch/RecipeSearch';
import ShoppingList from '../src/pages/ShoppingList/ShoppingList';
import WeekView from '../src/pages/WeekView/WeekView';
import SignupPage from './pages/SignupPage/SignupPage';
import userService from '../src/utils/userService';


class App extends Component {
  state = {
    recipeSearch: [],
    user: userService.getUser()
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
          <a href='/dayview'>Day View</a> &nbsp;&nbsp;&nbsp;
          <a href='/weekview'>Week View</a> &nbsp;&nbsp;&nbsp;
          <a href='/recipesearch'>Recipe Search</a> &nbsp;&nbsp;&nbsp;
          <a href='/shoppinglist'>Shopping List</a> &nbsp;&nbsp;&nbsp;
          <a href='/login'>Login</a> &nbsp;&nbsp;&nbsp;
          <a href='/signup'>Sign Up</a> &nbsp;&nbsp;&nbsp;
        </nav>
        </header>
        <Switch>
          <Route path='/dayview' render={() =>
            <DayView />
          }/>
          <Route path='/login' render={() =>
            <LoginPage />
          }/>
          <Route path='/signup' render={({history}) =>
            <SignupPage
              history={history}
            />
          }/>
          <Route path='/recipesearch' render={() =>
            <RecipeSearch />
          }/>
          <Route path='/weekview' render={() =>
            <WeekView />
          }/>
          <Route path='/shoppinglist' render={() =>
            <ShoppingList />
          }/>
        </Switch>
        
        
      </div>
  );
  }
}

export default App;
