import { useState } from "react";
import loginUser from "../api/loginUser";

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="login">
            <input type="email" id="email" placeholder="email@dev.com" onInput={e => setEmail(e.target.value)} />
            <input type="password" id="password" placeholder="password" onInput={e => setPassword(e.target.value)} />
            <button onClick={() => loginUser(email, password)}>Login</button>
        </div>
    )
}