import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import BooksByCategory from '@/components/features/Books/BooksByCategory';
import BooksByCategorySkeleton from '@/components/features/Books/BooksByCategory/BooksByCategorySkeleton';
import PopularBooks from '@/components/features/Books/PopularBooks';
import PopularBooksSkeleton from '@/components/features/Books/PopularBooks/PopularBooksSkeleton';
import useBooksStore from '@/store/books.store';
import useCategoriesStore from '@/store/categories.store';

import scss from './Books.module.scss';

const Books = () => {
    const {
        categoriesWithBooks,
        getCategoriesWithBooks,
        booksByCategory,
        getBooksByCategory,
        isLoading,
    } = useBooksStore(
        useShallow(state => ({
            categoriesWithBooks: state.categoriesWithBooks,
            getCategoriesWithBooks: state.getCategoriesWithBooks,
            booksByCategory: state.booksByCategory,
            getBooksByCategory: state.getBooksByCategory,
            isLoading: state.isLoading,
        }))
    );

    const { selectedCategory, setSelectedCategory } = useCategoriesStore(
        useShallow(state => ({
            selectedCategory: state.selectedCategory,
            setSelectedCategory: state.setSelectedCategory,
        }))
    );

    useEffect(() => {
        if (selectedCategory === 'All Categories') {
            getCategoriesWithBooks();
        } else {
            if (selectedCategory) {
                getBooksByCategory(selectedCategory);
            }
        }
    }, [getBooksByCategory, getCategoriesWithBooks, selectedCategory]);

    const handleClick = (category: string) => {
        if (!category) return;

        setSelectedCategory(category);
    };

    return (
        <section className={scss.books}>
            {selectedCategory === 'All Categories' ? (
                <>
                    {!isLoading ? (
                        <PopularBooks
                            categoriesWithBooks={categoriesWithBooks}
                            onClick={handleClick}
                        />
                    ) : (
                        <PopularBooksSkeleton />
                    )}
                </>
            ) : (
                <>
                    {!isLoading ? (
                        <BooksByCategory
                            selectedCategory={selectedCategory}
                            booksByCategory={booksByCategory}
                        />
                    ) : (
                        <BooksByCategorySkeleton />
                    )}
                </>
            )}
        </section>
    );
};

export default Books;
