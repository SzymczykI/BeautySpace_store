const baseUrl = process.env.BASE_URL
console.log('####', baseUrl)

export const getData = async (url, token) => {
    const result = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    const data = await result.json();
    return data;
}

export const postData = async (url, post, token) => {
    const result = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = await result.json();
    return data;
}

export const putData = async (url, post, token) => {
    const result = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = await result.json();
    return data;
}

export const patchData = async (url, post, token) => {
    const result = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    const data = await result.json();
    return data;
}

export const deleteData = async (url, token) => {
    const result = await fetch(`${baseUrl}/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    const data = await result.json();
    return data;
}