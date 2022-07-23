import "./App.css"
import { useState } from "react";
import QuestLog from "./components/QuestLog"
import Login from "./views/Login"

function App() {

  const [currentUser, setCurrentUser] = useState()

  return (
      (currentUser ? 
        <div className="">
          <QuestLog />
        </div>
        :
        <Login onLogin={setCurrentUser} />
      )
    );
}

export default App;
