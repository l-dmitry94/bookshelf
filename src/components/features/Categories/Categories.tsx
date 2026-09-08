import { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import { useShallow } from 'zustand/react/shallow';

import CategoriesItem from '@/components/features/Categories/CategoriesItem';
import { useMedia } from '@/hooks/useMedia';
import useCategoriesStore from '@/store/categories.store';
import type { ICategory } from '@/types/categories.types';

import scss from './Categories.module.scss';

import 'simplebar-react/dist/simplebar.min.css';

const Categories = () => {
    const { categories, getCategories } = useCategoriesStore(
        useShallow(state => ({
            categories: state.categories,
            getCategories: state.getCategories,
        }))
    );

    const { isMobile } = useMedia();

    const allCategoryItem: ICategory = {
        list_name: 'All Categories',
    };

    const formattedCategories = [allCategoryItem, ...categories].filter(
        item => item.list_name !== ''
    );

    const [activeCategory, setActiveCategory] = useState<string>(allCategoryItem.list_name);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const maxHeight = isMobile ? 228 : 472;

    return (
        <section className={scss.categories}>
            <SimpleBar className={scss.scrollbar} style={{ maxHeight }}>
                <ul className={scss.list}>
                    {formattedCategories.map(category => (
                        <CategoriesItem
                            key={category.list_name}
                            {...category}
                            activeItem={category.list_name === activeCategory}
                            onClick={() => setActiveCategory(category.list_name)}
                        />
                    ))}
                </ul>
            </SimpleBar>
        </section>
    );
};

export default Categories;
