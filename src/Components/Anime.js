import React from "react"



const Anime = (props) => {
    return(
        <div className="card">
            
            <img className="image-anime" src={props.image} alt="anime"/>
            <div className="screen"></div>
            
            <button className="details" datatype={props.data}>Details</button>
            
            
        </div>
        
        
    )
}


export default Anime