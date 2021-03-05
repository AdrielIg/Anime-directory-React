import React, { useEffect,useState} from "react"
import getDetail from "../services/getDetail"
import "../AnimeDetail.css"
import {Link} from "wouter"


const AnimeDetail = (params) => {
    
    const [loadingDetail, setLoadingDetail] = useState(false)
    const [animeInfo, setAnimeInfo ] = useState([])
    const {title} = params.params

    useEffect(function () {
        setLoadingDetail(true)
        getDetail({ title })
        .then(animeInfo => {
            setLoadingDetail(false)
            setAnimeInfo(animeInfo)
            
            
            
        })
    }, [title])

    const {episodes, image_url, rated, score, synopsis, type, url} = animeInfo 

    const titleAnime = title.replaceAll("%20"," ")

    const valor = document.querySelector(".input-anime").value
    const prevLink = `/search/${valor}`
    
    
    
    if(loadingDetail){
        return <h3 className="loading-detail">Loading...</h3>
    }


    return (
        <section className="card-detail">
            <div className="wrapper-general">
                <div className="nav-detail">
                    <Link to= {prevLink}> Go Back</Link>
                    <div className="rated-detail" >
                        <p>{rated}</p>
                    </div>
                </div>
                <div>
                    <h2>{titleAnime}</h2>
                </div>
                <div className="wrapper-detail">
                    <div className="container-img">
                        <img src={image_url} alt={titleAnime}/>
                    </div>
                    <div className="container-data">
                        <h3>Synopsis:</h3>
                        <p className="synopsis">{synopsis}<a href={url} target="_blank" rel="noreferrer" className="see-more">See more</a></p>
                        <div className="container-episodes">
                            <p className="episodes">Episodes: {episodes}</p>
                            <p className="score">Rate: {score}</p>
                            <p className="type"> {type}</p>
                        </div>
                        <div className="see-anime-div">
                            <a href={url} target="_blank" rel="noreferrer" className="see-anime">See Anime</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
   



export default AnimeDetail