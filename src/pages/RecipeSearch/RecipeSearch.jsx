import React from 'react';
import { getRecipes } from '../../services/edamam-api';
import WeekView from '../WeekView/WeekView';
import { PromiseProvider } from 'mongoose';

const RecipeSearch = (props) => {
    
    

    return (
        <div>Recipe Search
            <input name='query' type='text'></input>
            <button onClick={console.log}  type='submit'>Sumbit</button>
            <WeekView 
                apiInfo={props.apiInfo}
            />
        </div>
    )
}


export default RecipeSearch;