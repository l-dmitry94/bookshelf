import { useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import { useShallow } from 'zustand/react/shallow';

import CategoriesItem from '@/components/features/Categories/CategoriesItem';
import { useMedia } from '@/hooks/useMedia';
import useCategoriesStore from '@/store/categories.store';
import type { ICategory } from '@/types/categories.types';

import scss from './Categories.module.scss';

import 'simplebar-react/dist/simplebar.min.css';

const allCategoryItem: ICategory = {
    list_name: 'All Categories',
};

const Categories = () => {
    const { categories, getCategories, selectedCategory, setSelectedCategory } = useCategoriesStore(
        useShallow(state => ({
            categories: state.categories,
            getCategories: state.getCategories,
            selectedCategory: state.selectedCategory,
            setSelectedCategory: state.setSelectedCategory,
        }))
    );

    const { isMobile } = useMedia();

    const formattedCategories = [allCategoryItem, ...categories].filter(
        item => item.list_name !== ''
    );

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
        </section>
    );
};

export default Categories;
