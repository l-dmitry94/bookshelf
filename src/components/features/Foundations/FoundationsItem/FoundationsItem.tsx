import clsx from 'clsx';
import type { FC } from 'react';

import scss from './FoundationsItem.module.scss';

interface Props {
    foundation: {
        title: string;
        url: string;
        img: string;
        img2x: string;
    };
    index: number;
    isTranslateItems: boolean;
}

const FoundationsItem: FC<Props> = ({ foundation, index, isTranslateItems }) => {
    const { title, url, img, img2x } = foundation;

    return (
        <li
            className={clsx(
                scss.foundationsItem,
                isTranslateItems && scss.foundationsItemTranslate
            )}
        >
            <span className={scss.index}>{String(index).padStart(2, '0')}</span>

            <a href={url} target="_blank" rel="noopener noreferrer" className={scss.link}>
                <img
                    src={img}
                    alt={title}
                    srcSet={`${img} 1x, ${img2x} 2x`}
                    className={scss.image}
                />
            </a>
        </li>
    );
};

export default FoundationsItem;
