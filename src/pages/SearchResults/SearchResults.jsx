import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';
import DropdownDoW from '../../components/Dropdown/Dropdown';
import * as weekAPI from '../../services/weeks-api';
import DropdownWeek from '../../components/DropdownWeek/DropdownWeek';

class SearchResults extends Component {
  state = {
    selectedDay: '',
    selectedWeek: '',
    weeks: []
  }
  async componentDidMount(){
    const user = await weekAPI.getWeeks(this.props.user._id);
    console.log(user.weeks)
    this.setState({weeks: user.weeks})
    
  }
  handleSelectedDay = async day => {
    await this.setState({selectedDay: day})
    console.log(this.state.selectedDay)
  }
  handleSelectedWeek = async week => {
    await this.setState({selectedWeek: week})
    console.log(this.state.selectedWeek)
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
              <DropdownWeek
            weeks={this.state.weeks}
            handleSelectedWeek={this.handleSelectedWeek}
            />
            </div>
          )}
        </div>
        
    );
}}
            

export default SearchResults;