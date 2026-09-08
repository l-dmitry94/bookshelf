import clsx from 'clsx';
import type { FC } from 'react';

import type { ICategory } from '@/types/categories.types';

import scss from './CategoriesItem.module.scss';

interface Props extends ICategory {
    activeItem: boolean;
    onClick: () => void;
}

const CategoriesItem: FC<Props> = ({ list_name, activeItem, onClick }) => {
    return (
        <li className={clsx(scss.category, activeItem && scss.categoryActive)} onClick={onClick}>
            {list_name}
        </li>
    );
};

export default CategoriesItem;
