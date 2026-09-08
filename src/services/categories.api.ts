import instance from '@/services/axios.config';
import type { ICategory } from '@/types/categories.types';

const categoriesApi = {
    getCategories: () => instance.get<ICategory[]>('/category-list'),
};

export default categoriesApi;
