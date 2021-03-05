const apiKey = process.env.REACT_APP_JIKAN_API_KEY;

export default function getAnimes ({title = "shingeki"} = {}) {
   
    return fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${title}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": `${apiKey}`,
		"x-rapidapi-host": "jikan1.p.rapidapi.com"
	}
    }).then(res => res.json())
    .then (response => {
    const {results = []} = response
        if(Array.isArray(results)){
            /* console.log(results) */
            const animesInfo = results[0]
                
            
            return animesInfo
        
    }
  })
}