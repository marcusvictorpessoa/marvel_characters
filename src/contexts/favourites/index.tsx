'use client'
import { FavouriteContextData } from "@/models/favourites";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

const FavouriteContext = createContext({} as FavouriteContextData)

export function FavouriteProvider({ children }: { children: ReactNode }) {

    const [favouritesList, setFavouritesList] = useState([] as any);

    useEffect(() => {
        const favouritesLocalDb = JSON.parse(localStorage.getItem('@favourites')!)

        if(favouritesLocalDb){
            setFavouritesList(favouritesLocalDb)
        }
    }, [])

    function addFavourite(character: any) {
        if (isFavouriteAdd(character?.id)) {
            setFavouritesList((prev: any) => prev.filter((fav: any) => fav?.id !== character?.id))
            localStorage.setItem('@favourites', JSON.stringify([...favouritesList]))
        } else {
            setFavouritesList((prev: any) => [...prev, character])
            localStorage.setItem('@favourites', JSON.stringify([...favouritesList, character]))
        }
    }

    function isFavouriteAdd(id: number): boolean {

        const favouritesIds = favouritesList?.map((fav: any) => fav?.id)

        return favouritesIds?.includes(id)
    }

    return (
        <FavouriteContext.Provider value={{ favouritesList, addFavourite, isFavouriteAdd }}>
            {children}
        </FavouriteContext.Provider>
    )
}

export function useFavourites() {
    const context = useContext(FavouriteContext);
    return context;
}