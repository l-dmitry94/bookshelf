import Skeleton from '@/components/ui/Skeleton';

import scss from './BooksByCategorySkeleton.module.scss';

const BooksByCategorySkeleton = () => {
    return (
        <div className={scss.skeleton}>
            <Skeleton containerClassName={scss.bookListTitle} />

            <ul className={scss.listDetail}>
                {Array.from({ length: 15 }).map((_, index) => (
                    <li key={index} className={scss.bookItem}>
                        <Skeleton containerClassName={scss.bookItemImage} borderRadius={8} />

                        <div className={scss.info}>
                            <Skeleton containerClassName={scss.bookItemTitle} />
                            <Skeleton containerClassName={scss.bookItemAuthor} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksByCategorySkeleton;
