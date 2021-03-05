import React from "react"
import { useLocation } from "wouter"



const Anime = (props) => {
    const [camino, setCamino] = useLocation()
    return(
        <div className="card-wrapper">
            <div className="card">
                
                <img className="image-anime" src={props.image} alt="anime"></img>
                
                
                <div className="gradient"></div>
                <div className="screen"></div>
                
                <button onClick={() => setCamino(props.url)} className="details" >Details</button>
               
                
            </div>
            <h4 className="card-title">{props.titulo}</h4>
        </div>
            

        
        
    )
}


export default Anime