import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import BookDetail from '@/components/features/Books/BookDetail';
import BooksByCategory from '@/components/features/Books/BooksByCategory';
import BooksByCategorySkeleton from '@/components/features/Books/BooksByCategory/BooksByCategorySkeleton';
import PopularBooks from '@/components/features/Books/PopularBooks';
import PopularBooksSkeleton from '@/components/features/Books/PopularBooks/PopularBooksSkeleton';
import Modal from '@/components/ui/Modal';
import hasBookInCart from '@/helpers/checkBook';
import useBooksStore from '@/store/books.store';
import useCategoriesStore from '@/store/categories.store';
import type { IBook } from '@/types/books.types';

import scss from './Books.module.scss';

const Books = () => {
    const {
        book,
        booksInCart,
        addBookInCart,
        removeBookFromCart,
        getBookById,
        clearBook,
        categoriesWithBooks,
        getCategoriesWithBooks,
        booksByCategory,
        getBooksByCategory,
        isLoading,
    } = useBooksStore(
        useShallow(state => ({
            book: state.book,
            booksInCart: state.booksInCart,
            addBookInCart: state.addBookInCart,
            removeBookFromCart: state.removeBookFromCart,
            getBookById: state.getBookById,
            clearBook: state.clearBook,
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

    const [modalIsOpen, setModalIsOpen] = useState(false);

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

    const handleBookClick = async (id: string) => {
        if (!id) return;

        await getBookById(id);

        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);

        setTimeout(() => {
            clearBook();
        }, 300);
    };

    const handleCartItem = (book: IBook) => {
        if (hasBookInCart(booksInCart, book._id)) {
            return removeBookFromCart(book._id);
        }

        addBookInCart(book);
    };

    return (
        <section className={scss.books}>
            {selectedCategory === 'All Categories' ? (
                <>
                    {!isLoading ? (
                        <PopularBooks
                            categoriesWithBooks={categoriesWithBooks}
                            onClick={handleClick}
                            onBookClick={handleBookClick}
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
                            onBookClick={handleBookClick}
                        />
                    ) : (
                        <BooksByCategorySkeleton />
                    )}
                </>
            )}

            <Modal modalIsOpen={modalIsOpen} onClose={handleCloseModal} className={scss.modal}>
                {book && (
                    <BookDetail book={book} books={booksInCart || []} onCartItem={handleCartItem} />
                )}
            </Modal>
        </section>
    );
};

export default Books;
