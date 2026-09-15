import type { IBook } from '@/types/books.types';

const hasBookInCart = (cartBooks: IBook[] | null, bookId: string) => {
    return cartBooks?.some(book => book._id === bookId) ?? false;
};

export default hasBookInCart;
