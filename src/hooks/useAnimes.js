import {useEffect, useState} from "react"
import getAnimes from "../services/getAnimes"

export function useAnimes ({keyword}) {
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

    return {loading, animes}

}