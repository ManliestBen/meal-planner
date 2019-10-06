const BASE_URL = 'api/edamam';
const API_URL = process.env.TESTURL;

export function getRecipes() {
    const apiUrl = `API_URL`;
    const response = fetch('https://api.edamam.com/search?q=chicken&app_id=b3f870bd&app_key=36756c5ab534f0e9b7b047940a2358d5&from=0&to=3&calories=591-722&health=alcohol-free'
                             
                            )
        .then(res => res.json())
    
    
    return response;
}





// export async function getRecipes() {
//     const response = await fetch(API_URL);
//     const myJSON = await response.json();
//     console.log(JSON.stringify(myJSON));
//     return response;
    
// }



// const apiUrl = API_URL;
    // console.log('fetching');
    // const response = fetch(
    //                     apiUrl, 
    //                     {mode: 'cors',
    //                     headers: {'Content-Type': 'application/json'}
    //                     }
    //                     )
    //     .then(console.log(response))
    //     .then(response => response.json())