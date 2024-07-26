'use client'
import useCharacterDetails from "@/hooks/useCharacterDetails";
import { useEffect, useState } from "react";
import BackgroundSpinner from "../BackgroundSpinner";
import { useFavourites } from "@/contexts/favourites";
import Message from "../Message";


export default function CharacterDetails({ id }: { id: string }) {

    const { characterDetails, loading, getDetails, hasError } = useCharacterDetails()

    const { addFavourite, isFavouriteAdd } = useFavourites()

    useEffect(() => {
        getDetails(id)
    }, [])

    if (loading) {
        return <BackgroundSpinner />
    }

    return (
        <>
            {!!hasError && <Message content={hasError} />}
            {Object.keys(characterDetails).length !== 0 ? <div className="flex max-sm:flex-col justify-around shadow-sm h-[70%] p-2 mx-2">
                <div className="flex flex-col sm:w-[40px] sm:pl-4 sm:py-4">
                    <button onClick={() => addFavourite({ id: Number(id), name: characterDetails.name, thumbnail: `${characterDetails?.thumbnail?.path}.${characterDetails?.thumbnail?.extension}` })}>
                        <img src={isFavouriteAdd(Number(id)) ? "/red_heart.svg" : "/heart_black_outline.svg"} alt="heart icon" width={30} height={30} />
                    </button>
                </div>
                <div className="flex justify-center max-sm:items-center sm:items-start sm:w-[40%] h-[100%] overflow-hidden sm:p-4 rounded-sm">
                    <img className="rounded-sm" src={`${characterDetails?.thumbnail?.path}.${characterDetails?.thumbnail?.extension}`} alt="character image" width={'80%'} />
                </div>

                <div className="sm:w-[55%] p-4 h-[100%] overflow-y-auto">
                    <h1 className="text-2xl font-bold">{characterDetails?.name}</h1>
                    <span className="mt-1">{characterDetails?.description}</span>
                    <div className="flex">
                        <span className="text-lg font-bold">Histórias em quadrinhos:</span>
                        <span className="text-lg font-bold ml-2">{characterDetails?.comics?.items?.length}</span>
                    </div>
                    <div className="ml-2 mt-1 flex flex-col">
                        {characterDetails?.comics?.items.map((comics, index) => {
                            return <span key={comics?.name + index}>{index + 1}. {comics?.name}</span>
                        })}
                    </div>
                    <div>
                        <span className="text-lg font-bold">Séries:</span>
                        <span className="text-lg font-bold ml-2">{characterDetails?.series?.items?.length}</span>
                    </div>
                    <div className="ml-2 mt-1 flex flex-col">
                        {characterDetails?.series?.items.map((series, index) => {
                            return <span key={series?.name + index}>{index + 1}. {series?.name}</span>
                        })}
                    </div>
                    <div>
                        <span className="text-lg font-bold">Histórias:</span>
                        <span className="text-lg font-bold ml-2">{characterDetails?.stories?.items?.length}</span>
                    </div>
                    <div className="ml-2 mt-1 flex flex-col">
                        {characterDetails?.stories?.items.map((stories, index) => {
                            return <span key={stories?.name + index}>{index + 1}. {stories?.name}</span>
                        })}
                    </div>
                </div>
            </div> : <span className="ml-5">Nenhum detalhe!</span>}
        </>
    )
}