import React, {useState} from "react"
import {useLocation} from "wouter"



const Header = () => {
    
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()
    

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
        
        
        
    }
    const handleChange = event => {
        setKeyword(event.target.value)
    }
    
    return(
        <section className="header">
            <div className="welcome">
                <h1>Welcome to Anime Finder</h1>
                <h2>Using the <span>Jikan API(MyAnimeList)</span> you can search animes and get some data</h2>
            </div>
            <div className="search-box">
                <form className="search-anime" onSubmit={handleSubmit}>
                    <label>Anime:</label>
                    <input type="text" name="search" value={keyword} onChange={handleChange}  className="input-anime" placeholder="Search anime here..."></input>
                </form>
                <button className="search-button" onClick={handleSubmit}  >Search Anime</button>
            </div>
            
        </section>
    )
}

export default Header