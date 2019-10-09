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
    // const newmeal = await weekAPI.createMeal(newMealData);
    // this.setState(state => ({
    //   meals: [...state.meals, newmeal]
    // }), () => this.props.history.push('/'));
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
    const data = new FormData(event.target.value);
    console.log(this.formData.current.recipename.value)
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
              <form ref={this.formData} onSubmit={this.handleSubmit}>
                <label htmlFor='recipename'/>
                <input id='recipename' name='recipename' type='text' value={item.recipe.label}/>
                <label htmlFor='selectedweek'/>
                <input id='selectedweek' name='selectedweek' type='hidden' value={item.recipe.label}/>
                <label htmlFor='selectedday'/>
                <input id='selectedday' name='selectedday' type='hidden' value={item.recipe.label}/>
                <label htmlFor='mealcalories'/>
                <input id='mealcalories' name='mealcalories' type='hidden' value={item.recipe.label}/>
                <label htmlFor='mealtime'/>
                <input id='mealtime' name='mealtime' type='hidden' value={item.recipe.label}/>
                <label htmlFor='mealyield'/>
                <input id='mealyield' name='mealyield' type='hidden' value={item.recipe.label}/>
                
                <button>Add Meal</button>  
              </form>
            </div>
          )}
        </div>
        
    );
}}
            

export default SearchResults;