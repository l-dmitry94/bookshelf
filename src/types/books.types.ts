export interface IBook {
    _id: string;
    author: string;
    book_image: string;
    title: string;
    list_name: string;
}

export interface ICategoryWithBooks {
    list_name: string;
    books: IBook[];
}
