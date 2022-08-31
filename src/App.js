
import { Fragment } from "react";
import { BrowserRouter as Router,Switch,Routes,Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat/Chat";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="app_body">
            <SideBar/>
            <Chat/>
        <Router>
          {/* <Switch> */}
            <Routes>
            
            <Route path="/cart" element={<Chat/> } />
            
          
          
            <Route path="/">
              {/* <h1>Home screen</h1> */}

            </Route>
            </Routes>
          {/* </Switch> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
