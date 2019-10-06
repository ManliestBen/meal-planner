import React from 'react';
import {Link} from 'react-router-dom';
import { statement } from '@babel/template';


function WeekView (props) {
  
    return (
        
        <div>Week View
          {props.apiInfo.map((item, idx) =>
            <div>
                <img src={item.recipe.image}></img><br></br>
              <a 
                key={item.recipe.label}
                href={item.recipe.url}
                target="_blank"
              >
                {item.recipe.label}<br></br>
              </a>
             Recipe From: {item.recipe.source}<br></br>
             Total Time: {item.recipe.totalTime} minutes<br></br>
             Yield: {Math.round(item.recipe.yield)} Servings <br></br>
             Calories: {Math.round((item.recipe.calories/item.recipe.yield))}<br></br>

            </div>
          )}
        </div>
        
    );
}
            

export default WeekView;