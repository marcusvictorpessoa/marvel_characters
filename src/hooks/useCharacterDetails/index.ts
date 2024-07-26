import { getCharacterDetails } from "@/services/requests"
import { useState, useEffect } from "react"

type CharacterDetails = {
    id: number,
    name: string, 
    thumbnail: {
        path: string, 
        extension: string
    },
    description: string,
    comics: {
        items: {name: string}[]
    },
    series: {
        items: {name: string}[]
    },
    stories: {
        items: {name: string}[]
    }
}


export default function useCharacterDetails(){

    const [characterDetails, setCharactersDetails] = useState({} as CharacterDetails)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState("")

    useEffect(() => {
      if(!!hasError){
        setTimeout(() => {setHasError("")}, 3000)
      }
    }, [hasError])

    async function getDetails(id: string) {
        setLoading(true)
        try {
          const data = await getCharacterDetails(Number(id))
          setCharactersDetails(data.results[0])
        } catch (error) {
          setHasError("Erro ao buscar detalhes do personagem!")
        } finally {
          setLoading(false)
        }
      }

    return {
        characterDetails,
        loading,
        hasError,
        getDetails
    }
}