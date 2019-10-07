import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as weekAPI from '../../services/weeks-api';
import userService from '../../utils/userService';



class WeekView extends Component {
    state = {
        weeks: [],
        user: this.props.user
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

    render() {
        const show = this.state.weeks.length != 0 ? <div>{this.state.weeks[0]._id}</div> : 'loading'
    
        return (
        <>
        <div>{this.state.weeks.map((week, idx) =>
            
            <p>{week.startDate}
            <button onClick={() => this.handleDeleteWeek(week._id)}>X</button>
            </p>
            
        )}
        </div>
        
        <div></div>
        </>
        )

}}

export default WeekView;