import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';

import scss from './Title.module.scss';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    text: string;
    className?: string;
}

const Title: FC<Props> = ({ text, className, ...rest }) => {
    const words = text.split(' ');

    if (words.length <= 1) {
        return (
            <h2 className={clsx(scss.title, className)} {...rest}>
                <span className={scss.titleAccent}>{text}</span>
            </h2>
        );
    }

    const lastWord = words.pop();
    const restOfText = words.join(' ');

    return (
        <h2 className={clsx(scss.title, className)} {...rest}>
            {restOfText} <span className={scss.titleAccent}>{lastWord}</span>
        </h2>
    );
};

export default Title;
