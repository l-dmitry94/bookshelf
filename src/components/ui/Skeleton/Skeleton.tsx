import type { FC } from 'react';
import ReactSkeleton, { type SkeletonProps } from 'react-loading-skeleton';

const Skeleton: FC<SkeletonProps> = ({ ...rest }) => {
    return <ReactSkeleton {...rest} />;
};

export default Skeleton;
