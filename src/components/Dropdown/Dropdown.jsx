import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const daysOfWeek = [
    {
        key: 'Sunday',
        text: 'Sunday',
        value: 'Sunday'
    },
    {
        key: 'Monday',
        text: 'Monday',
        value: 'Monday'
    },
    {
        key: 'Tuesday',
        text: 'Tuesday',
        value: 'Tuesday'
    },
    {
        key: 'Wednesday',
        text: 'Wednesday',
        value: 'Wednesday'
    },
    {
        key: 'Thursday',
        text: 'Thursday',
        value: 'Thursday'
    },
    {
        key: 'Friday',
        text: 'Friday',
        value: 'Friday'
    },
    {
        key: 'Saturday',
        text: 'Saturday',
        value: 'Saturday'
    },
]

const DropdownDoW = (props) => {
    const handleOnChange = (e,data) => {
        props.handleSelectedDay(data.value)
    }
    return (
    <Dropdown
    placeholder='Select Day'
    fluid
    selection
    options={daysOfWeek}
    onChange={handleOnChange}
    />
    
)
}
export default DropdownDoW