import React, { Component, createRef } from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';
import DropdownDoW from '../../components/Dropdown/Dropdown';
import * as weekAPI from '../../services/weeks-api';
import DropdownWeek from '../../components/DropdownWeek/DropdownWeek';

class SearchResults extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMeal = this.handleAddMeal.bind(this);
    this.formData = createRef();
  }

  state = {
    selectedDay: '',
    selectedWeek: '',
    weeks: [],
    meals: []
  }
  async componentDidMount(){
    const user = await weekAPI.getWeeks(this.props.user._id);
    console.log(user.weeks)
    this.setState({weeks: user.weeks})
    
  }
  handleAddMeal = async newMealData => {
    console.log(newMealData)
    const newmeal = await weekAPI.createMeal(newMealData);
    this.setState(state => ({
      meals: [...state.meals, newmeal]
    }), () => this.props.history.push('/'));
  }
  handleSelectedDay = async day => {
    await this.setState({selectedDay: day})
    console.log(this.state.selectedDay)
  }
  handleSelectedWeek = async week => {
    await this.setState({selectedWeek: week})
    console.log(this.state.selectedWeek)
  }
  handleSubmit(event) {
    event.preventDefault();
    
    const index = event.target.value;
    
    const data = {
      dayOfWeek: this.state.selectedDay,
      mealName: this.props.apiInfo[index].recipe.label,
      recipeUri: this.props.apiInfo[index].recipe.uri,
      recipeImage: this.props.apiInfo[index].recipe.image,
      recipeUrl: this.props.apiInfo[index].recipe.url,
      recipeYield: this.props.apiInfo[index].recipe.yield,
      recipeIngredients: this.props.apiInfo[index].recipe.ingredientList,
      recipeCalories: this.props.apiInfo[index].recipe.calories,
      recipeTime: this.props.apiInfo[index].recipe.totalTime
    }
    
    this.handleAddMeal(data)
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
              
             <DropdownWeek
            weeks={this.state.weeks}
            handleSelectedWeek={this.handleSelectedWeek}
            />
              <DropdownDoW 
            handleSelectedDay={this.handleSelectedDay}
            />
            <button onClick={this.handleSubmit} value={idx}>Button</button>
            </div>
          )}
        </div>
        
    );
}}
            

export default SearchResults;