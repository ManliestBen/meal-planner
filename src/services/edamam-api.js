const BASE_URL = 'api/edamam';
const API_URL = 'https://api.edamam.com/search?q=chicken&app_id=03a351a6&app_key=130225b099dc5dbed0c31d68e794955b'

export function getRecipe() {
    const apiUrl = API_URL;
    const response = fetch(apiUrl, {mode: 'cors'})
        .then(res => res.json())
    return response;
    
}