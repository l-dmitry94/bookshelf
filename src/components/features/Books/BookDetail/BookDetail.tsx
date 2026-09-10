import { type FC, Fragment } from 'react';
import SimpleBar from 'simplebar-react';

import { buyLinksImages } from '@/assets/img/buy-links';
import type { IBookDetail } from '@/types/books.types';

import scss from './BookDetail.module.scss';

interface Props {
    book: IBookDetail;
}

const BookDetail: FC<Props> = ({ book }) => {
    const { author, book_image, buy_links, description, title } = book;

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
                <button type="button" className={scss.button}>
                    add to shopping list
                </button>
            </div>
        </div>
    );
};

export default BookDetail;
