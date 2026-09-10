import type { FC } from 'react';

import BookItem from '@/components/features/Books/BookItem';
import Title from '@/components/ui/Title';
import type { IBook } from '@/types/books.types';

import scss from './BooksByCategory.module.scss';

interface Props {
    selectedCategory: string;
    booksByCategory: IBook[];
    onBookClick: (id: string) => void;
}

const BooksByCategory: FC<Props> = ({ selectedCategory, booksByCategory, onBookClick }) => {
    return (
        <>
            <Title text={selectedCategory} className={scss.title} />

            <ul className={scss.list}>
                {booksByCategory.map(book => (
                    <BookItem
                        key={book._id}
                        book={book}
                        isSelectedCategory={true}
                        onBookClick={onBookClick}
                    />
                ))}
            </ul>
        </>
    );
};

export default BooksByCategory;
