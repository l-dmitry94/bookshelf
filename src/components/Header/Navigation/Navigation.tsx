import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { icons } from 'assets/icons';

import { INavigation } from './Navigation.types';
import css from './Navigation.module.css';

const Navigation: FC<INavigation> = ({ items }) => {
    return (
        <ul className={css.navigationList}>
            {items.map(({ label, href }) => (
                <li key={label}>
                    <NavLink to={href} className={css.navigationLink}>
                        {label === 'Shopping list' ? (
                            <>
                                {label}
                                <svg className={css.cartIcon}>
                                    <use href={`${icons}#icon-cart`}></use>
                                </svg>
                            </>
                        ) : (
                            label
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
