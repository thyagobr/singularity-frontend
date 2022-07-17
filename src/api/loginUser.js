export default function loginUser(email, password, onLoginSuccess, onLoginFail) {
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
    ).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            onLoginFail()
        }
    }).then(function (json) {
        onLoginSuccess(json)
    })
}