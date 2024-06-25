import { useEffect, useState } from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import ThemeSwitcher from './ThemeSwitcher';
import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';

import navigationItems from './navigation.json';
import { useMedia } from 'hooks/useMedia';

import css from './Header.module.css';
import Auth from './Auth';

const Header = () => {
    const { isMobile } = useMedia();
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isMobile) {
            setMenuIsOpen(false);
        }
    }, [isMobile]);

    return (
        <div className="relative">
            <header className={css.header}>
                <div className={css.container}>
                    <div className={css.wrapper}>
                        <div className={css.left}>
                            <Logo />
                            {!isMobile && <Navigation items={navigationItems} />}
                        </div>
                        <div className={css.right}>
                            <ThemeSwitcher />
                            {isMobile && (
                                <BurgerButton
                                    isOpen={menuIsOpen}
                                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                                />
                            )}
                            {!isMobile && <Auth />}
                        </div>
                    </div>
                </div>
            </header>

            {isMobile && <BurgerMenu isOpen={menuIsOpen} />}
        </div>
    );
};

export default Header;
