import clsx from 'clsx';
import type { FC, SVGProps } from 'react';

import scss from './Icon.module.scss';

type Variant =
    | 'arrow-right'
    | 'bookshelf'
    | 'burger'
    | 'caret-down'
    | 'cart'
    | 'chevron'
    | 'chevron-group'
    | 'close'
    | 'logo'
    | 'trash'
    | 'user'
    | 'email'
    | 'password';

interface Props extends SVGProps<SVGSVGElement> {
    variant: Variant;
    className?: string;
}

const Icon: FC<Props> = ({ variant, className, ...rest }) => {
    return (
        <svg className={clsx(scss.icon, className)} {...rest}>
            <use href={`/sprite.svg#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
