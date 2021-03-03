import React, {useState, useEffect} from "react" 
import getAnimes from "../services/getAnimes"
import Anime from "./Anime"


function ListOfAnimes ({ params }){

    const {keyword} = params
    const [animes, setAnimes ] = useState([])
    const [loading, setLoading] = useState(false)


   

    
    

    useEffect(function () {
        setLoading(true)
        getAnimes({ keyword })
        .then(animes => {
            setLoading(false)
            setAnimes(animes)
            
            
        })
    }, [keyword])

   

    if (loading){
        return <h3>Loading...</h3>
    }

    


    return animes.map(singleAnime =>
       
        <Anime 
           image={singleAnime.image_url}
           url= {`/search/${singleAnime.title}/${singleAnime.mal_id}`}
           key = {singleAnime.title}
           
           
        />)
      

}
export default ListOfAnimes