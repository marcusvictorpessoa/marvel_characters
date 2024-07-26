import { api } from "../api"

export async function getCharacters(offset: number) {
    try {
        const response = await fetch(`${api.baseUrl}/v1/public/characters?ts=${api.timestamp}&apikey=${api.apiKey}&hash=${api.hash}&offset=${offset}`, { cache: 'force-cache' })
        const result = await response.json()
        return result.data
    } catch (error) {
        throw new Error('Erro ao buscar personagens')
    }
}

export async function getCharacterDetails(param_id: number) {

    try {
        const response = await fetch(`${api.baseUrl}/v1/public/characters/${param_id}?ts=${api.timestamp}&apikey=${api.apiKey}&hash=${api.hash}`, { cache: 'force-cache' })
        const result = await response.json()
        return result.data
    } catch (error) {
        throw new Error('Erro ao buscar personagem')
    }
}

export async function getCharacterSearch(name: string) {
    try {
        const response = await fetch(`${api.baseUrl}/v1/public/characters?ts=${api.timestamp}&apikey=${api.apiKey}&hash=${api.hash}&name=${name}`, { cache: 'force-cache' })
        const result = await response.json()
        return result.data
    } catch (error) {
        throw new Error('Erro ao buscar personagem')
    }
}