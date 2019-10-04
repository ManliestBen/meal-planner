import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import * as edamamAPI from '../src/services/edamam-api';
import logo from './logo.svg';
import './App.css';
import { read } from 'fs';


class App extends Component {
  state = {
    recipeSearch: [],
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
          <a href=''>Taco</a> &nbsp;&nbsp;&nbsp;
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </nav>
        
        </header>
      </div>
  );
  }
}

export default App;
