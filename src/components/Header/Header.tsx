import Logo from './Logo';
import Navigation from './Navigation';

import navigationItems from './navigation.json';

import css from './Header.module.css';
import { useMedia } from 'hooks/useMedia';
import ThemeSwitcher from './ThemeSwitcher';
import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';

const Header = () => {
    const { isMobile } = useMedia();

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
                            <BurgerButton onClick={() => {}} />
                        </div>
                    </div>
                </div>
            </header>

            <BurgerMenu />
        </div>
    );
};

export default Header;
