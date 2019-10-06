import React from 'react';
import { getRecipes } from '../../services/edamam-api';

class SearchForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.recipeSearch = this.recipeSearch.bind(this);
    }
    
    
    handleSubmit(event) {
      event.preventDefault();
    
    }
    async recipeSearch (event) {
        event.preventDefault();
        const listRecipes = await getRecipes(event.target.search.value);
        const sendToApp = listRecipes.hits;
        console.log(sendToApp);
        await this.props.handleSetState(sendToApp);
        
      }
    render() {
      return (
        <form onSubmit={this.recipeSearch}>
          <label htmlFor="search">Recipe Search: </label>
          <input id="search" name="search" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }

  export default SearchForm