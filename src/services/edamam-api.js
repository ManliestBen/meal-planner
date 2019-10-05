const BASE_URL = 'api/edamam';
const API_URL = process.env.TESTURL;

export function getRecipe() {
    const apiUrl = API_URL;
    const response = fetch(apiUrl, {mode: 'cors'})
        .then(res => res.json())
    return response;
    
}