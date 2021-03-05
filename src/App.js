import React from "react"
import Header from "./Components/Header"
import ListOfAnimes from "./Components/ListOfAnimes"
import AnimeDetail from "./Components/AnimeDetail"
import Footer from "./Components/Footer"
import {Route} from "wouter"

import './App.css';

console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_JIKAN_API_KEY)





function App() {

  
  

  return (
    
    <div className="App">
      <Header />
      <div className="anime-center">
          
          <Route
              component={ListOfAnimes}
              path="/search/:keyword"
          />
          <Route
              component={AnimeDetail}
              path="/search/:title/:id"
          />
          
        
         
        
        
      </div>
      <Footer/>
    </div>
    
    
  );
}

export default App;
