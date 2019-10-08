import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';
import DropdownDoW from '../../components/Dropdown/Dropdown';


class SearchResults extends Component {
  state = {
    selectedDay: ''
  }
  handleSelectedDay = async day => {
    await this.setState({selectedDay: day})
    console.log(this.state.selectedDay)
}
    render () {
    return (
        
        <div>
          {this.props.apiInfo.map((item, idx) =>
            <div>
                <br></br><br></br>
                <img src={item.recipe.image}></img><br></br>
              <a 
                key={item.recipe.label}
                href={item.recipe.url}
                target="_blank"
              >
                {item.recipe.label}<br></br>
              </a>
             Recipe From: {item.recipe.source}<br></br>
             Total Time: {item.recipe.totalTime} minutes<br></br>
             Yield: {Math.round(item.recipe.yield)} Servings <br></br>
             Calories: {Math.round((item.recipe.calories/item.recipe.yield))}<br></br>
              
              <DropdownDoW 
            handleSelectedDay={this.handleSelectedDay}
            />
            </div>
          )}
        </div>
        
    );
}}
            

export default SearchResults;