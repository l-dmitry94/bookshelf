import Skeleton from '@/components/ui/Skeleton';

import scss from './PopularBooksSkeleton.module.scss';

const PopularBooksSkeleton = () => {
    return (
        <div className={scss.skeleton}>
            <Skeleton containerClassName={scss.title} />

            <ul className={scss.list}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <li key={index} className={scss.booksListItem}>
                        <Skeleton containerClassName={scss.bookListTitle} />

                        <ul className={scss.listDetail}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <li key={index} className={scss.bookItem}>
                                    <Skeleton
                                        containerClassName={scss.bookItemImage}
                                        borderRadius={8}
                                    />

                                    <div className={scss.info}>
                                        <Skeleton containerClassName={scss.bookItemTitle} />
                                        <Skeleton containerClassName={scss.bookItemAuthor} />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className={scss.seeMoreButtonWrapper}>
                            <Skeleton containerClassName={scss.seeMoreButton} borderRadius={40} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularBooksSkeleton;
