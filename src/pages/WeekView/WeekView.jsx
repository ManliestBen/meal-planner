import React from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';


function WeekView (props) {
    
    
    return (
        
        <div>Week View
            {props.apiInfo.map((item, idx) =>
                
                <Link 
                   key={idx}
                   to={`/recipe/${idx}`}
                >       
                        <br></br><br></br>
                        <p>Recipe: {props.apiInfo.bookmarked}</p><br></br>
                        {console.log(props.recipeSearch)}
                        {console.log(props.apiInfo[idx].bookmarked)}
                        Recipe From: {item.bookmarked}<br></br>
                        Recipt To: {item.bought}<br></br>
                        {/* /* Gonna remove later, just using to check DB */} 
                        
                    </Link>
                    )}
        </div>
        
    )
            }

export default WeekView;