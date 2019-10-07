const BASE_URL = '/api/weeks';

export function create(week) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(week)
    }).then(res => res.json());
}