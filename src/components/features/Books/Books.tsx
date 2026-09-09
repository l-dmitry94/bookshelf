import { Fragment, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import BookItem from '@/components/features/Books/BookItem';
import BooksListItem from '@/components/features/Books/BooksListItem';
import Title from '@/components/ui/Title';
import useBooksStore from '@/store/books.store';
import useCategoriesStore from '@/store/categories.store';

import scss from './Books.module.scss';

const Books = () => {
    const { categoriesWithBooks, getCategoriesWithBooks, booksByCategory, getBooksByCategory } =
        useBooksStore(
            useShallow(state => ({
                categoriesWithBooks: state.categoriesWithBooks,
                getCategoriesWithBooks: state.getCategoriesWithBooks,
                booksByCategory: state.booksByCategory,
                getBooksByCategory: state.getBooksByCategory,
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
        console.log(selectedCategory);

        setSelectedCategory(category);
    };

    return (
        <section className={scss.books}>
            {selectedCategory === 'All Categories' ? (
                <>
                    <Title text="Best Sellers Books" className={scss.title} />

                    <ul className={scss.list}>
                        {categoriesWithBooks.map((item, index) => (
                            <Fragment key={item.list_name}>
                                {index > 0 && (
                                    <BooksListItem
                                        list_name={item.list_name}
                                        books={item.books}
                                        onClick={handleClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    {selectedCategory && <Title text={selectedCategory} className={scss.title} />}

                    <ul className={scss.listAlt}>
                        {booksByCategory.map(book => (
                            <BookItem key={book._id} book={book} isSelectedCategory={true} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
};

export default Books;
