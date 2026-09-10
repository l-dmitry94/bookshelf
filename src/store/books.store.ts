import { isAxiosError } from 'axios';
import { create } from 'zustand';

import booksApi from '@/services/books.api';
import type { IBook, IBookDetail, ICategoryWithBooks } from '@/types/books.types';

interface IBooksStore {
    book: IBookDetail | null;
    categoriesWithBooks: ICategoryWithBooks[];
    booksByCategory: IBook[];
    isLoading: boolean;
    error: string | null;

    getCategoriesWithBooks: () => Promise<void>;
    getBooksByCategory: (selectedCategory: string) => Promise<void>;
    getBookById: (id: string) => Promise<void>;
    clearBook: () => void;
}

const useBooksStore = create<IBooksStore>()(set => ({
    book: null,
    categoriesWithBooks: [],
    booksByCategory: [],
    isLoading: false,
    error: null,

    getCategoriesWithBooks: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await booksApi.getCategoriesWithBooks();

            set({ categoriesWithBooks: response.data });
        } catch (error) {
            let errorMessage = 'Unable to load books. Please try again later.';

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || errorMessage;

                console.error('[API Error]:', error.response?.status, error.response?.data.message);
            } else {
                console.error('[Unknown Error]:', error);
            }

            set({ error: errorMessage });
        } finally {
            set({ isLoading: false });
        }
    },

    getBooksByCategory: async selectedCategory => {
        set({ isLoading: true, error: null });

        try {
            const response = await booksApi.getBooksByCategory(selectedCategory);
            console.log(response.data);

            set({ booksByCategory: response.data });
        } catch (error) {
            let errorMessage = 'Unable to load books. Please try again later.';

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || errorMessage;

                console.error('[API Error]:', error.response?.status, error.response?.data.message);
            } else {
                console.error('[Unknown Error]:', error);
            }

            set({ error: errorMessage });
        } finally {
            set({ isLoading: false });
        }
    },

    getBookById: async id => {
        set({ error: null });

        try {
            const response = await booksApi.getBookById(id);

            set({ book: response.data });
        } catch (error) {
            let errorMessage = 'Unable to load book. Please try again later.';

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || errorMessage;

                console.error('[API Error]:', error.response?.status, error.response?.data.message);
            } else {
                console.error('[Unknown Error]:', error);
            }

            set({ error: errorMessage });
        }
    },

    clearBook: () => set({ book: null }),
}));

export default useBooksStore;
