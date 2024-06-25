import { FC } from 'react';

import { icons } from 'assets/icons';

import { IBurgerButton } from './BurgerButton.types';
import css from './BurgerButton.module.css';

const BurgerButton: FC<IBurgerButton> = ({ onClick }) => {
    return (
        <button onClick={onClick} className={`group ${css.burgerButton}`}>
            <svg className={`${css.burgerIcon} group-hover:stroke-primary-violet`}>
                <use href={`${icons}#icon-burger`}></use>
            </svg>
        </button>
    );
};

export default BurgerButton;
