import { useState } from "react";
import loginUser from "../api/loginUser";

export default function Login(props) {
    const { onLogin } = props
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const onLoginFail = () => {
        setPassword('')
        alert("Couldn't login user")
    }

    return (
        <div className="login">
            <input
                type="email"
                id="email"
                placeholder="email@dev.com"
                onInput={e => setEmail(e.target.value)}
                value={email} />
            <input
                type="password"
                id="password"
                onInput={e => setPassword(e.target.value)}
                value={password} />
            <button
                onClick={() => loginUser(email, password, onLogin, onLoginFail)}
            >
                Login
            </button>
        </div>
    )
}