import React from 'react';
import {Link} from 'react-router-dom';


const WeekView = (props) => {
    return (
        <div>Week View
            {props.recipeSearch.map((recipe, idx) =>
                <Link 
                   key={idx}
                   to={`/recipe/${idx}`}
                >   <br></br><br></br>
                        Recipe: {recipe.q}<br></br>
                        Recipe From: {recipe.from}<br></br>
                        Recipt To: {recipe.to}<br></br>
                        {/* /* Gonna remove later, just using to check DB */} 
                       
                    </Link>
                    )}
            {/* {props.recipeSearch[0].q} */}
        </div>
        
    )
}



export default WeekView;