import "./App.css"
import { useEffect, useState } from "react";
import QuestLog from "./components/QuestLog"
import Login from "./views/Login"

function App() {

  const [currentUser, setCurrentUser] = useState()
  const prepareSession = (user) => {
    setCurrentUser(user)
    window.localStorage.setItem("session", JSON.stringify(user))
  }
  const isUserLoggedIn = () => {
    let sessionUser = window.localStorage.getItem("session")
    if (sessionUser) {
      return JSON.parse(sessionUser)
    } else {
      return false
    }
  }
  
  useEffect(() => {
    let user = isUserLoggedIn()
    if (user) {
      setCurrentUser(user)
    }
  }, [])

  return (
      (currentUser ? 
        <div className="">
          <QuestLog />
        </div>
        :
        <Login onLogin={prepareSession} />
      )
    );
}

export default App;
