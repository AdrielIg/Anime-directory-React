import React from "react"
import Header from "./Components/Header"
import ListOfAnimes from "./Components/ListOfAnimes"
import {Route} from "wouter"

import './App.css';




function App() {

  
  

  return (
    
    <div className="App">
      <Header />
      <div className="anime-center">
        <Route
          component={ListOfAnimes}
          path="/search/:keyword"
        />
        
        
      </div>
    </div>
    
    
  );
}

export default App;
