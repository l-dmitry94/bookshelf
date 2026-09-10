import instance from '@/services/axios.config';
import type { IBook, IBookDetail, ICategoryWithBooks } from '@/types/books.types';

const booksApi = {
    getCategoriesWithBooks: () => instance.get<ICategoryWithBooks[]>('/top-books'),

    getBooksByCategory: (selectedCategory: string) =>
        instance.get<IBook[]>('/category', {
            params: {
                category: selectedCategory,
            },
        }),

    getBookById: (id: string) => instance.get<IBookDetail>(`/${id}`),
};

export default booksApi;
