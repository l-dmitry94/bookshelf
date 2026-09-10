import type { FC } from 'react';
import { Fragment } from 'react/jsx-runtime';

import BooksListItem from '@/components/features/Books/BooksListItem';
import Title from '@/components/ui/Title';
import type { ICategoryWithBooks } from '@/types/books.types';

import scss from './PopularBooks.module.scss';

interface Props {
    categoriesWithBooks: ICategoryWithBooks[];
    onClick: (selectedCategory: string) => void;
    onBookClick: (id: string) => void;
}

const PopularBooks: FC<Props> = ({ categoriesWithBooks, onClick, onBookClick }) => {
    return (
        <>
            <Title text="Best Sellers Books" />

            <ul className={scss.list}>
                {categoriesWithBooks.map((item, index) => (
                    <Fragment key={item.list_name}>
                        {index > 0 && (
                            <BooksListItem
                                list_name={item.list_name}
                                books={item.books}
                                onClick={onClick}
                                onBookClick={onBookClick}
                            />
                        )}
                    </Fragment>
                ))}
            </ul>
        </>
    );
};

export default PopularBooks;
