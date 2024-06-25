import { FC, useEffect } from 'react';
import clsx from 'clsx';

import Auth from '../Auth';
import Navigation from '../Navigation';
import LogoutButton from '../Auth/LogoutButton';

import navigationItems from '../navigation.json';

import { IBurgerMenu } from './BurgerMenu.types';
import css from './BurgerMenu.module.css';

const BurgerMenu: FC<IBurgerMenu> = ({ isOpen }) => {
    const isLogged = true;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'visible';
    }, [isOpen]);

    return (
        <div>
            <div
                className={clsx(css.overlay, {
                    'invisible opacity-0': !isOpen,
                    'visible opacity-100': isOpen,
                })}
            ></div>

            <div
                className={clsx(css.content, {
                    'invisible opacity-0': !isOpen,
                    'visible opacity-100': isOpen,
                })}
            >
                <div className={css.wrapper}>
                    <div>
                        <Auth />
                        <div className={css.navigationWrapper}>
                            <Navigation items={navigationItems} />
                        </div>
                    </div>
                    {!isLogged && <LogoutButton />}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
