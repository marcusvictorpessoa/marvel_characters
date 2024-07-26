'use client'
import { useFavourites } from "@/contexts/favourites";
import Link from "next/link";

export default function CharacterCard({ name, thumb, id }: { name: string, thumb: string, id: number }) {

    const { favouritesList, addFavourite, isFavouriteAdd} = useFavourites()

    return (
        <div className="bg-white shadow-sm h-[250px] p-2 max-w-[300px]">
            <div className="w-full h-[70%] overflow-hidden">
                <img src={thumb} alt="character image" width={'100%'} />
            </div>

            <div className="flex flex-col justify-between bg-white w-full h-[30%] p-1">
                <div className="flex justify-between items-center">
                    <h1 className="text-base font-medium">{name}</h1>
                    <button onClick={() => addFavourite({id: id, thumbnail: thumb, name: name})}>
                        <img src={isFavouriteAdd(id) ? "/red_heart.svg" : "/heart_black_outline.svg"} alt="heart icon" width={20} height={20} />
                    </button>
                </div>
                <Link className="flex justify-center items-center bg-blue-500 text-white h-7 rounded-sm" href={`details/${id}`}>
                    Ver detalhes
                </Link>
            </div>
        </div>
    )
}