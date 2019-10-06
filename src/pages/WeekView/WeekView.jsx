import React from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';


function WeekView (props) {
    
    const panda = props.apiInfo;
    return (
        
        <div>Week View
            {panda.map((item, idx) =>
                
                <Link 
                   key={idx}
                   to={`/recipe/${idx}`}

                >       
                        <br></br><br></br>
                        Recipe: {item.bookmarked}<br></br>
                        {console.log(item.bookmarked)}
                        Recipe From: {item.bookmarked}<br></br>
                        Recipt To: {item.bought}<br></br>
                        {/* /* Gonna remove later, just using to check DB */} 
                        
                    </Link>
                    )}
       
        </div>
        
    )
            }

export default WeekView;