import { FC } from 'react';
import clsx from 'clsx';

import { icons } from 'assets/icons';

import { IBurgerButton } from './BurgerButton.types';
import css from './BurgerButton.module.css';

const BurgerButton: FC<IBurgerButton> = ({ onClick, isOpen }) => {
    return (
        <button onClick={onClick} className={`group ${css.burgerButton}`}>
            <svg className={`${css.burgerIcon} group-hover:stroke-primary-violet`}>
                <use
                    className={clsx({ 'opacity-0': isOpen }, { 'opacity-100': !isOpen })}
                    href={`${icons}#icon-burger`}
                ></use>
                <use
                    className={clsx({ 'opacity-100': isOpen }, { 'opacity-0': !isOpen })}
                    href={`${icons}#icon-close`}
                ></use>
            </svg>
        </button>
    );
};

export default BurgerButton;
