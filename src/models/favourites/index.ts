

export interface FavouriteContextData {
    favouritesList: {id: string, name: string, thumb: string}[];
    addFavourite: (character: any) => void;
    isFavouriteAdd: (id: number) => boolean;
}