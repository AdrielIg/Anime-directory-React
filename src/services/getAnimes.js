const apiKey = "25bb06f1dbmsh95003e1c51042adp11afa7jsncdf91a93ac14"


export default function getAnimes ({keyword = "shingeki"} = {}) {
  

   return  fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${keyword}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": `${apiKey}`,
		"x-rapidapi-host": "jikan1.p.rapidapi.com"
	}
}).then(res => res.json())
  .then (response => {
    const {results = []} = response
    if (Array.isArray(results)){
      
      const animes = results.map(result => { 
          const {title, image_url, mal_id} = result
          return {title, image_url, mal_id}
        })
      return animes
    }
  })
}