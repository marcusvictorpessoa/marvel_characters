'use client'
import { ReactNode } from "react";
import CharacterCard from "../CharacterCard";

export default function FavouriteGrid({children}: { children: ReactNode}) {

    return (
        <div className="h-[75%] mx-2 grid grid-cols-repeat-autofit-250px gap-3 p-3 overflow-y-auto">
            {children}
        </div>
    );
}