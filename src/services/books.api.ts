import instance from '@/services/axios.config';
import type { IBook, ICategoryWithBooks } from '@/types/books.types';

const booksApi = {
    getCategoriesWithBooks: () => instance.get<ICategoryWithBooks[]>('/top-books'),
    getBooksByCategory: (selectedCategory: string) =>
        instance.get<IBook[]>('/category', {
            params: {
                category: selectedCategory,
            },
        }),
};

export default booksApi;
