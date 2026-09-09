import { isAxiosError } from 'axios';
import { create } from 'zustand';

import booksApi from '@/services/books.api';
import type { IBook, ICategoryWithBooks } from '@/types/books.types';

interface IBooksStore {
    categoriesWithBooks: ICategoryWithBooks[];
    booksByCategory: IBook[];
    isLoading: boolean;
    error: string | null;

    getCategoriesWithBooks: () => Promise<void>;
    getBooksByCategory: (selectedCategory: string) => Promise<void>;
}

const useBooksStore = create<IBooksStore>()(set => ({
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
}));

export default useBooksStore;
