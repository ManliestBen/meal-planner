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
import NavBar from '../src/components/NavBar/NavBar';
import { getRecipes } from './services/edamam-api';

class App extends Component {
  state = {
    recipeSearch: [
      { q: 'Taco',
        from: 0,
        to: 10},
      { q: 'Booze',
        from: 6,
        to: 52}
    ],
    apiInfo: [
      { bookmarked: 'taco'

      }],
    user: userService.getUser()
    
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  async componentDidMount() {
 
    const listRecipes = await getRecipes();
    console.log(listRecipes.hits);
    this.setState({apiInfo: [...listRecipes.hits]}, () => console.log('done'))
    console.log(this.state.apiInfo[0])
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        {/* <nav>
          <a href='/dayview'>Day View</a> &nbsp;&nbsp;&nbsp;
          <a href='/weekview'>Week View</a> &nbsp;&nbsp;&nbsp;
          <a href='/recipesearch'>Recipe Search</a> &nbsp;&nbsp;&nbsp;
          <a href='/shoppinglist'>Shopping List</a> &nbsp;&nbsp;&nbsp;
          <a href='/login'>Login</a> &nbsp;&nbsp;&nbsp;
          <a href='/signup'>Sign Up</a> &nbsp;&nbsp;&nbsp;
        </nav> */}
        </header>
        <Switch>
          <Route path='/dayview' render={() =>
            <DayView />
          }/>
          <Route path='/login' render={({history}) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route path='/signup' render={({history}) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route path='/recipesearch' render={() =>
            <RecipeSearch />
          }/>
          <Route path='/weekview' render={() =>
            <WeekView
              apiInfo={this.state.apiInfo}
              recipeSearch={this.state.recipeSearch}
              
            />
          }/>
          <Route path='/shoppinglist' render={() =>
            <ShoppingList />
          }/>
        </Switch>
        <h1></h1>
        
      </div>
  );
  }
}

export default App;
