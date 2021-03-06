import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
class AddWeekPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            startDate: new Date().toLocaleDateString('en-US', options),
            user: this.props.user,
            newDate: ''
        },
        startDay: {startDay: new Date(),
        user: this.props.user},
    }

    formRef = React.createRef();

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state.formData)
        await this.props.handleAddWeek(this.state.formData)
        this.props.history.push('/weekview')
    };
    handleChg = date => {
        
        this.setState({
            startDay: date.toLocaleDateString('en-US', options)
        })
        this.setState({
            formData: {startDate : date.toLocaleDateString('en-US', options),
            user: this.props.user}
        })
        
        
    }
    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h2>Add Week</h2>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Select a Week Start Date</label>
                        <p>{this.state.startday}</p>
                        <DatePicker
                            selected={this.state.startDay.startDay}
                            onChange={this.handleChg}
                            
                        />
                        <input
                            className='form-control'
                            name='startDate'
                            value={this.state.startDay}
                            onChange={this.handleChange}
                            
                            required
                        />
                        <p></p>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}




export default AddWeekPage;