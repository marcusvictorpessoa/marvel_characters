
import Link from "next/link"

export default function Nav(){

    return (
        <nav className="flex items-center w-full h-[5%] bg-emerald-600 sm:px-2 max-sm:px-0">
            <Link href="/" className="flex gap-2 items-center h-full hover:bg-emerald-800/35 transition-all ease-in-out px-3">
                <img src={'/home.svg'} alt="home icon" width={20} height={20} />
                <span className="text-white font-medium">Início</span>
            </Link>
            <Link href="/favourites" className="flex gap-2 items-center h-full hover:bg-emerald-800/35 transition-all ease-in-out px-3">
                <img src={'/heart.svg'} alt="home icon" width={20} height={20} />
                <span className="text-white font-medium" >Favoritos</span>
            </Link>
        </nav>
    )
}