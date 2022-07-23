import { useState } from "react";
import loginUser from "../api/loginUser";

export default function Login(props) {
    const { onLogin } = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onLoginFail = () => {
        setPassword('')
        alert("Couldn't login user")
    }

    return (
        <form className="flex flex-col justify-center mx-auto w-80" onSubmit={(e) => {
            e.preventDefault()
            loginUser(email, password, onLogin, onLoginFail)
        }
        }>
            <div className="mx-2 my-2 flex flex-col text-center">
                <h1 className="text-3xl text-white my-10">singularity</h1>
                <h3 className="text-xl text-white my-1 mb-10">login</h3>
            </div>
            <div className="mx-2 my-2">
                <input
                    className="shadow border rounded px-2 py-1 w-full outline-teal-500 ring-2 ring-indigo-500"
                    type="email"
                    id="email"
                    placeholder="email@dev.com"
                    onInput={e => setEmail(e.target.value)}
                    value={email} />
            </div>
            <div className="mx-2 my-2">
                <input
                    className="shadow border rounded px-2 py-1 w-full outline-teal-500 ring-2 ring-indigo-500"
                    type="password"
                    id="password"
                    onInput={e => setPassword(e.target.value)}
                    value={password} />
            </div>
            <div className="mx-2 my-2 flex justify-center">
                <button
                    className="bg-indigo-500 hover:bg-teal-500 py-2 px-4 rounded text-white font-bold transition-colors"
                    type="submit"
                >
                    Login
                </button>
            </div>
        </form>
    )
}