'use client'
import BackgroundSpinner from "../BackgroundSpinner";
import { ReactNode } from "react";

export default function CharactersGrid({ children, loading }: { loading: boolean, children: ReactNode }) {


    if (loading) {
        return <BackgroundSpinner />
    }

    return (
        <div className={`h-[70%] mx-2 grid grid-cols-repeat-autofit-250px gap-3 p-3 overflow-y-auto`}>
            {children}
        </div>
    );
}