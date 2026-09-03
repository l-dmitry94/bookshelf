import type { FC, ReactNode } from 'react';

import scss from './Container.module.scss';

interface Props {
    children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
    return <div className={scss.container}>{children}</div>;
};

export default Container;
