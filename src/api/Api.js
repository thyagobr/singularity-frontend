export default async function Api(path, method, body, success, failure) {
    let token = "bad token"

    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        }
    }

    if (method.toLowerCase() !== "get") {
        options.body = JSON.stringify(body)
    }

    const response = await fetch(
        `http://localhost:3001${path}`,
        options
    )
    return response.json()
}