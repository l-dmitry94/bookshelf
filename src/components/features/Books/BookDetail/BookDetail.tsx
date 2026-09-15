import { type FC, Fragment } from 'react';
import SimpleBar from 'simplebar-react';

import { buyLinksImages } from '@/assets/img/buy-links';
import hasBookInCart from '@/helpers/checkBook';
import type { IBook, IBookDetail } from '@/types/books.types';

import scss from './BookDetail.module.scss';

interface Props {
    book: IBookDetail;
    books: IBook[];
    onCartItem: (book: IBook) => void;
}

const BookDetail: FC<Props> = ({ book, books, onCartItem }) => {
    const { author, book_image, buy_links, description, title } = book;

    const isAddedInCart = hasBookInCart(books, book._id);

    return (
        <div className={scss.content}>
            <SimpleBar className={scss.scrollbar}>
                <div className={scss.wrapper}>
                    <img src={book_image} alt={title} className={scss.image} />

                    <div className={scss.info}>
                        <div className={scss.header}>
                            <h2 className={scss.title}>{title}</h2>
                            <span className={scss.author}>{author}</span>
                        </div>

                        {description && <p className={scss.description}>{description}</p>}

                        <div className={scss.links}>
                            {buy_links.map(({ name, url }) => (
                                <Fragment key={name}>
                                    {buyLinksImages[name] && (
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={scss.link}
                                        >
                                            <img
                                                src={buyLinksImages[name]}
                                                alt={name}
                                                className={scss.linkImage}
                                            />
                                        </a>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </SimpleBar>

            <div className={scss.buttonWrapper}>
                <button type="button" onClick={() => onCartItem(book)} className={scss.button}>
                    {isAddedInCart ? 'remove from the shopping list' : 'add to shopping list'}
                </button>
            </div>

            {isAddedInCart && (
                <p className={scss.notification}>
                    Сongratulations! You have added the book to the shopping list. To delete, press
                    the button “Remove from the shopping list”.
                </p>
            )}
        </div>
    );
};

export default BookDetail;
