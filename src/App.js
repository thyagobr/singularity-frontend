import "./App.css"
import { useState } from "react";
import Quest from "./components/quest"
import Login from "./views/Login"

function App() {

  const [currentUser, setCurrentUser] = useState()

  return (
      (currentUser ? 
        <div className="App">
          <Quest />
        </div>
        :
        <Login onLogin={setCurrentUser} />
      )
    );
}

export default App;
