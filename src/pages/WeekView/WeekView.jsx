import React from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';


function WeekView (props) {
  
    return (
        
        <div>Week View
          {props.apiInfo.map((item, idx) =>
            <div>
                <img src={item.recipe.image}></img>
              <Link 
                key={idx}
                to={`/recipe/${idx}`}
              >
                <div>
                  Name: {item.recipe.label}<br></br>
                  
                </div>
              </Link>
              Calories: {item.recipe.calories}
            </div>
          )}
        </div>
        
    );
}
            

export default WeekView;