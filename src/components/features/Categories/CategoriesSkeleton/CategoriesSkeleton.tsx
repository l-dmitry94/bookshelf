import Skeleton from '@/components/ui/Skeleton';
import { useMedia } from '@/hooks/useMedia';

import scss from './CategoriesSkeleton.module.scss';

const CategoriesSkeleton = () => {
    const { isMobile } = useMedia();

    const length = isMobile ? 6 : 9;

    return (
        <div className={scss.skeleton}>
            <div className={scss.list}>
                {Array.from({ length }).map((_, index) => (
                    <Skeleton key={index} containerClassName={scss.item} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesSkeleton;
