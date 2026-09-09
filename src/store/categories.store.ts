import { isAxiosError } from 'axios';
import { create } from 'zustand';

import categoriesApi from '@/services/categories.api';
import type { ICategory } from '@/types/categories.types';

interface ICategoriesStore {
    categories: ICategory[];
    selectedCategory: string;
    isLoading: boolean;
    error: string | null;

    getCategories: () => Promise<void>;
    setSelectedCategory: (selectedCategory: string) => void;
}

const useCategoriesStore = create<ICategoriesStore>()(set => ({
    categories: [],
    selectedCategory: '',
    isLoading: false,
    error: null,

    getCategories: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await categoriesApi.getCategories();
            set({ categories: response.data });
        } catch (error) {
            let errorMessage = 'Unable to load categories. Please try again later.';

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

    setSelectedCategory: selectedCategory => {
        set({ selectedCategory });
    },
}));

export default useCategoriesStore;
