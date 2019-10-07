import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class AddWeekPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            startDate: new Date().toLocaleString()
        },
        startDay: new Date()
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddWeek(this.state.formData);
    };
    handleChg = date => {
        this.setState({
            startDay: date
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
                        <label>Week Start Date</label>
                        <DatePicker
                            selected={this.state.startDay}
                            onChange={this.handleChg}
                        />
                        {/* <input
                            className='form-control'
                            name='startDate'
                            value={this.state.formData.startDate}
                            onChange={this.handleChange}
                            required
                        /> */}
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}




export default AddWeekPage;