const BASE_URL = '/api/weeks';

export function create(week) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(week)
    }).then(res => res.json());
}

export async function getWeeks(user) {
   const variable = await fetch(BASE_URL + '/week', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({user})
    }) 
    const newvariable = variable.json();
    return newvariable
}