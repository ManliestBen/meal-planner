import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Header, List } from 'semantic-ui-react';

import DropdownDoW from '../../components/Dropdown/Dropdown';

const DayView = ({state, props}) => {

const holder = state;
const holder2 = props;

return(
<>
    <div>
        {console.log(holder.weeks[holder2.match.params.idx].meals)}
        {console.log(holder2.match.params.idx)}
    </div>
</>
)}


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);




export default DayView;