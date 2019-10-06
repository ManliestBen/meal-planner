const BASE_URL = 'api/edamam';
const API_URL = process.env.TESTURL;

export function getRecipes(query) {
    const queryz = query;
    const apiUrl = `API_URL`;
    const response = fetch(`https://api.edamam.com/search?q=${queryz}&app_id=b3f870bd&app_key=36756c5ab534f0e9b7b047940a2358d5&from=0&to=3&calories=591-722&health=alcohol-free`
                             
                            )
        .then(res => res.json())
    
    
    return response;
}


