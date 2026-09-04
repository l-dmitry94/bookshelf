import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import scss from './Container.module.scss';

interface Props {
    children: ReactNode;
    className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
    return <div className={clsx(scss.container, className)}>{children}</div>;
};

export default Container;
