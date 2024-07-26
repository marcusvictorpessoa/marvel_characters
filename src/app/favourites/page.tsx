'use client'
import CharacterCard from "@/components/CharacterCard";
import Container from "@/components/Container";
import FavouriteGrid from "@/components/FavouritesGrid";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import { useFavourites } from "@/contexts/favourites";


export default function Favourites() {

    const { favouritesList } = useFavourites()

    return (
        <Container>
            <>
                <Header />
                <Nav />
                <div className="flex w-full h-[7%] items-center">
                    <PageTitle title="Favoritos" />
                </div>
                <FavouriteGrid>
                    {favouritesList?.length === 0 && <span className="ml-5">Nenhum personagem favoritado!</span>}
                    {favouritesList?.map((favourite: any) => {
                        return (
                            <CharacterCard key={favourite?.id} id={favourite?.id} name={favourite?.name} thumb={favourite?.thumbnail} />
                        )
                    })}
                </FavouriteGrid>
            </>
        </Container>
    );
}
