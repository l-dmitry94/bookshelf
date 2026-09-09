import clsx from 'clsx';
import type { FC } from 'react';

import type { IBook } from '@/types/books.types';

import scss from './BookItem.module.scss';

interface Props {
    book: IBook;
    isSelectedCategory?: boolean;
}

const BookItem: FC<Props> = ({ book, isSelectedCategory = false }) => {
    const { author, book_image, title } = book;

    return (
        <li className={clsx(scss.bookItem, isSelectedCategory && scss.bookItemShowAll)}>
            <img src={book_image} alt={title} className={scss.image} />

            <div className={scss.info}>
                <h4 title={title} className={scss.title}>
                    {title}
                </h4>
                <span className={scss.author}>{author}</span>
            </div>
        </li>
    );
};

export default BookItem;
