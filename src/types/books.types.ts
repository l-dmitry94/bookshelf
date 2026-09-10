export interface IBook {
    _id: string;
    author: string;
    book_image: string;
    title: string;
    list_name: string;
}

interface IBuyLink {
    name: string;
    url: string;
}

export interface IBookDetail extends IBook {
    buy_links: IBuyLink[];
    description: string;
}

export interface ICategoryWithBooks {
    list_name: string;
    books: IBook[];
}
