export default function Api(path, method, body, success, failure) {
    let token = "bad token"

    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        }
    }

    if (method.toLowerCase() !== "get") {
        options.body = body
    }

    return fetch(
        `http://localhost:3001${path}`,
        options
    ).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            failure()
        }
    }).then(function (json) {
        return json
    })
}