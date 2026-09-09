import { useEffect, useMemo } from 'react';
import SimpleBar from 'simplebar-react';
import { useShallow } from 'zustand/react/shallow';

import CategoriesItem from '@/components/features/Categories/CategoriesItem';
import CategoriesSkeleton from '@/components/features/Categories/CategoriesSkeleton';
import { useMedia } from '@/hooks/useMedia';
import useCategoriesStore from '@/store/categories.store';
import type { ICategory } from '@/types/categories.types';

import scss from './Categories.module.scss';

import 'simplebar-react/dist/simplebar.min.css';

const allCategoryItem: ICategory = {
    list_name: 'All Categories',
};

const Categories = () => {
    const { categories, getCategories, selectedCategory, setSelectedCategory, isLoading } =
        useCategoriesStore(
            useShallow(state => ({
                categories: state.categories,
                getCategories: state.getCategories,
                selectedCategory: state.selectedCategory,
                setSelectedCategory: state.setSelectedCategory,
                isLoading: state.isLoading,
            }))
        );

    const { isMobile } = useMedia();

    const formattedCategories = useMemo(() => {
        const sorted = categories
            .filter(item => item.list_name !== '')
            .sort((a, b) => a.list_name.localeCompare(b.list_name));

        return [allCategoryItem, ...sorted];
    }, [categories]);

    const maxHeight = isMobile ? 228 : 472;

    useEffect(() => {
        getCategories();

        setSelectedCategory(allCategoryItem.list_name);
    }, [getCategories, setSelectedCategory]);

    const handleClick = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory);
    };

    return (
        <section className={scss.categories}>
            {!isLoading ? (
                <SimpleBar className={scss.scrollbar} style={{ maxHeight }}>
                    <ul className={scss.list}>
                        {formattedCategories.map(category => (
                            <CategoriesItem
                                key={category.list_name}
                                {...category}
                                activeItem={category.list_name === selectedCategory}
                                onClick={handleClick}
                            />
                        ))}
                    </ul>
                </SimpleBar>
            ) : (
                <CategoriesSkeleton />
            )}
        </section>
    );
};

export default Categories;
