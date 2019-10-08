import React from 'react';
import { getRecipes } from '../../services/edamam-api';
import SearchResults from '../SearchResults/SearchResults';
import { PromiseProvider } from 'mongoose';
import SearchForm from '../../components/SearchForm/SearchForm';


const RecipeSearch = (props) => {
    
    

    return (
        <div>
            <SearchForm 
                handleSetState={props.handleSetState}
                apiInfo={props.apiInfo}

            />
            <SearchResults 
                apiInfo={props.apiInfo}
                user={props.user}
            />
        </div>
    )
}


export default RecipeSearch;


