'use client'
import { useState } from "react"


export default function FilterInput({ onSearch }: { onSearch: (search_param: string) => void }) {

    const [filterValue, setFilterValue] = useState("")

    return (
        <div className="flex gap-2 justify-end items-center max-sm:px-1 sm:px-5">
            <input
                value={filterValue}
                onChange={({ currentTarget }) => setFilterValue(currentTarget.value)}
                type="text" placeholder="Nome do personagem"
                className="bg-white h-8 max-sm:w-[200px] sm:w-[250px] border border-gray-400 p-1 rounded-sm"
            />
            <button
                onClick={() => onSearch(filterValue)}
                className="flex justify-center items-center bg-emerald-500 h-8 w-8 p-1 rounded-sm"
            >
                <img src={"/search.svg"} alt="search icon" width={20} height={20} />
            </button>
        </div>
    )
}