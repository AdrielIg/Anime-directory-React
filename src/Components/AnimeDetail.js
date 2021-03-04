import React, { useEffect,useState} from "react"
import getDetail from "../services/getDetail"
import "../AnimeDetail.css"

const apiKey = "25bb06f1dbmsh95003e1c51042adp11afa7jsncdf91a93ac14"

const AnimeDetail = (params) => {
    
    const [loadingDetail, setLoadingDetail] = useState(false)
    const [animeInfo, setAnimeInfo ] = useState([])
    const {title, id} = params.params

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
    
    
    
    if(loadingDetail){
        return <h3 className="loading-detail">Loading...</h3>
    }


    return (
        <section className="card-detail">
            <div className="wrapper-general">
                <div className="nav-detail">
                    <a href="./"> Go Back</a>
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
                        <p className="synopsis">{synopsis}<a href={url} className="see-more">See more</a></p>
                        <div className="container-episodes">
                            <p className="episodes">Episodes: {episodes}</p>
                            <p className="score">Rate: {score}</p>
                            <p className="type"> {type}</p>
                        </div>
                        <div className="see-anime-div">
                            <a href={url} className="see-anime">See Anime</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
   



export default AnimeDetail