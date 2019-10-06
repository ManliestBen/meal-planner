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
                <div>
                  Calories: {item.recipe.calories}
                </div>
              </Link>
           
          )}
        </div>
        
    );
}
            

export default WeekView;