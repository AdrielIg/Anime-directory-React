import React from "react"
import { useLocation } from "wouter"



const Anime = (props) => {
    const [camino, setCamino] = useLocation()
    return(
        <div className="card">
            
            <img className="image-anime" src={props.image} alt="anime"/>
            <div className="screen"></div>
            
            <button onClick={() => setCamino(props.url)} className="details" >Details</button>
            
            
        </div>
        
        
    )
}


export default Anime