import { getCharacters, getCharacterSearch } from "@/services/requests"
import { useEffect, useState } from "react"


export default function useCharacters(){

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState("")

    const [pagination, setPagination] = useState({} as { limit: number, total: number, offset: number })

    useEffect(() => {
      if(!!hasError){
        setTimeout(() => {setHasError("")}, 3000)
      }
    }, [hasError])
    

    async function getData(page: number) {
        setLoading(true)
        try {
          const data = await getCharacters(page)
          setCharacters(data.results)
          setPagination({
            limit: data.limit,
            offset: data.offset,
            total: data.total
          })
        } catch (error) {
          setHasError("Erro ao buscar personagens!")
        } finally {
          setLoading(false)
        }
      }

      async function getSearch(name: string) {
        setLoading(true)
        try {
          const data = await getCharacterSearch(name)
          setCharacters(data.results)
          setPagination({
            limit: data.limit,
            offset: data.offset,
            total: data.total
          })
        } catch (error) {
          setHasError("Erro ao buscar nome do personagem!")
          setCharacters([])
        } finally {
          setLoading(false)
        }
      }

    return {
        characters,
        loading,
        getData,
        getSearch,
        hasError,
        pagination
    }
}