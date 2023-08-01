import React from "react";
import{Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import FavComponenet from "./components/FavComponent";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>}/>  
        <Route exact path="/favbeer" element={<FavComponenet/>}/>       
        </Routes>      
    </div>
  );
}

export default App;
