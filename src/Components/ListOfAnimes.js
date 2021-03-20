import React from "react"
import Anime from "./Anime"
import {useAnimes} from "../hooks/useAnimes"


function ListOfAnimes ({ params }){

    const {keyword} = params
    const {loading , animes} = useAnimes({keyword})

    console.log("-")

    /* De esta parte ahora se encarga el hook custom "useAnimes.js*/ 
    /* const [animes, setAnimes ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getAnimes({ keyword })
        .then(animes => {
            setLoading(false)
            setAnimes(animes)
            
            
        })
    }, [keyword]) */

   

    if (loading){
        return <h3>Loading...</h3>
    }

    


    return animes.map(singleAnime =>
       
        <Anime 
           image={singleAnime.image_url}
           url= {`/search/${singleAnime.title}/${singleAnime.mal_id}`}
           key = {singleAnime.title}
           titulo= {singleAnime.title}
           
           
        />)
      

}
export default ListOfAnimes