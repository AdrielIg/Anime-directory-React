import React, { useEffect,useState} from "react"
import getDetail from "../services/getDetail"

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

    
    
    
    



    return <h1>{episodes}</h1>
}
   



export default AnimeDetail