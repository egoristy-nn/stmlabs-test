const URL = 'https://randomuser.me/api/?results=15'

export async function getUsers() {
    const response = await fetch(`${URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}