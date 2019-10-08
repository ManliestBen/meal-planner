import React, { Component } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import * as weekAPI from './services/weeks-api';
import logo from './logo.svg';
import './App.css';
import { read } from 'fs';
import DayView from '../src/pages/DayView/DayView';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import RecipeSearch from '../src/pages/RecipeSearch/RecipeSearch';
import ShoppingList from '../src/pages/ShoppingList/ShoppingList';
import WeekView from './pages/WeekView/WeekView';
import SignupPage from './pages/SignupPage/SignupPage';
import userService from '../src/utils/userService';
import NavBar from '../src/components/NavBar/NavBar';
import { getRecipes } from './services/edamam-api';
import AddWeekPage from '../src/pages/AddWeekPage/AddWeekPage';

class App extends Component {
  state = {
    
    apiInfo: [],
    user: userService.getUser(),
    weeks: []
    
  }
  
  handleAddWeek = async newWeekData => {
    const newWeek = await weekAPI.create(newWeekData);
    this.setState(state => ({
      weeks: [...state.weeks, newWeek]
    }), () => this.props.history.push('/'));
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  handleSetState = (fromSearch) => {
    this.setState({apiInfo: [...fromSearch]})
  }
  async handleRecipeSearch (query) {
    const listRecipes = await getRecipes(query);
    console.log(listRecipes.hits);
    this.setState({apiInfo: [...listRecipes.hits]}, () => console.log('done'))
  }
  // async componentDidMount() {
 
  //   const listRecipes = await getRecipes('ravioli chicken');
  //   console.log(listRecipes.hits);
  //   this.setState({apiInfo: [...listRecipes.hits]}, () => console.log('done'))
  // }
  
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
            <RecipeSearch
              handleSetState={this.handleSetState}
              apiInfo={this.state.apiInfo}
              
            />
          }/>
          <Route path='/weekview' render={({history}) =>
            <WeekView
              apiInfo={this.state.apiInfo}
              handleAddWeek={this.handleAddWeek}
              user={this.state.user}
              history={history}
            />
          }/>
          <Route path='/shoppinglist' render={() =>
            <ShoppingList />
          }/>
          <Route path='/addweek' render={({history}) =>
            <AddWeekPage 
            handleAddWeek={this.handleAddWeek}
            user={this.state.user}
            history={history}
            />
          }/>
        </Switch>
        <h1></h1>
        
      </div>
  );
  }
}

export default App;
