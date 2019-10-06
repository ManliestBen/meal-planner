import React from 'react';
import { getRecipes } from '../../services/edamam-api';
import WeekView from '../WeekView/WeekView';
import { PromiseProvider } from 'mongoose';
import SearchForm from '../../components/SearchForm/SearchForm';


const RecipeSearch = (props) => {
    
    

    return (
        <div>
            <SearchForm 
                handleSetState={props.handleSetState}
                apiInfo={props.apiInfo}

            />
            <WeekView 
                apiInfo={props.apiInfo}
            />
        </div>
    )
}


export default RecipeSearch;


