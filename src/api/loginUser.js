export default function loginUser(email, password) {
    fetch(
        "http://localhost:3001/api/login",
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email,
                password
            })
        }
    ).then(function(response) {
        return response.json()
    })
}