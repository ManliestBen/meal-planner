import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as weekAPI from '../../services/weeks-api';
import userService from '../../utils/userService';
import DropdownWeek from '../../components/DropdownWeek/DropdownWeek';
import DayView from '../DayView/DayView';



class WeekView extends Component {
    state = {
        weeks: [],
        user: this.props.user,
        selectedDay: ''
    };
    
    async componentDidMount(){
        console.log(this.state.user._id)
        const user = await weekAPI.getWeeks(this.state.user._id);
        this.setState({weeks: user.weeks})
        
    }
    

    handleDeleteWeek = async id => {
        await weekAPI.deleteWeek(id).then
        const user = await weekAPI.getWeeks(this.state.user._id);
        this.setState({weeks: user.weeks})
    }
    handleSelectedDay = async day => {
        await this.setState({selectedDay: day})
        console.log(this.state.selectedDay)
    }
    render() {
        const show = this.state.weeks.length != 0 ? <div>{this.state.weeks[0]._id}</div> : 'loading'
    
        return (
        <>
        <Router>
        <div>
            <Route exact path='/weekview'>
            {this.state.weeks.map((week, idx) =>
                <div>
                    <Link to={`/dayview/${idx}`}>{week.startDate}</Link>
                    <button onClick={() => this.handleDeleteWeek(week._id)}>X</button>
                </div>
            )}
            <Link to='/addweek' className='link'>Add Week</Link>
            </Route>
        </div>
            <Route path='/dayview/:idx' render={(props) =>
                <DayView 
                    props={props}
                    state={this.state}
                />
            }/>
      </Router>
        </>
        )

}}

export default WeekView;