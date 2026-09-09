import type { FC } from 'react';

import BookItem from '@/components/features/Books/BookItem';
import type { ICategoryWithBooks } from '@/types/books.types';

import scss from './BooksListItem.module.scss';

interface Props extends ICategoryWithBooks {
    onClick: (category: string) => void;
}

const BooksListItem: FC<Props> = ({ list_name, books, onClick }) => {
    return (
        <li className={scss.booksListItem}>
            <h3 className={scss.title}>{list_name}</h3>

            <ul className={scss.list}>
                {books.map(book => (
                    <BookItem key={book._id} book={book} />
                ))}
            </ul>

            <div className={scss.seeMoreButtonWrapper}>
                <button
                    type="button"
                    onClick={() => onClick(list_name)}
                    className={scss.seeMoreButton}
                >
                    See more
                </button>
            </div>
        </li>
    );
};

export default BooksListItem;
