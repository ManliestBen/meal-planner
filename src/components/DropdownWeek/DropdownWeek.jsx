import React from 'react';
import { Dropdown } from 'semantic-ui-react';



const DropdownWeek = (props) => {
    var weekOptions = []
    var len = props.weeks.length
    for (var i = 0; i < len; i++ ) {
        weekOptions.push({
            key: props.weeks[i]._id,
            text: props.weeks[i].startDate,
            value: props.weeks[i]._id
        })
    }
    const handleOnChange = (e,data) => {
        props.handleSelectedWeek(data.value)
    }
    return (
    <Dropdown
    placeholder={'Select Week'}
    fluid
    selection
    options={weekOptions}
    onChange={handleOnChange}
    />
    
)
}
export default DropdownWeek