import Auth from '@/components/common/Header/Auth';
import BurgerButton from '@/components/common/Header/BurgerButton';
import Logo from '@/components/common/Header/Logo';
import NavList from '@/components/common/Header/NavList';
import ThemeSwitcher from '@/components/common/Header/ThemeSwitcher';
import Container from '@/components/ui/Container';
import { useMedia } from '@/hooks/useMedia';

import scss from './Header.module.scss';

const Header = () => {
    const { isMobile, isTablet, isDesktop } = useMedia();
    const isLoggedIn = true;

    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.leftWrapper}>
                        <Logo />

                        {isLoggedIn && (isTablet || isDesktop) && <NavList />}
                    </div>

                    <div className={scss.rightWrapper}>
                        <ThemeSwitcher />

                        {(isTablet || isDesktop) && <Auth isLoggedIn={isLoggedIn} />}

                        {isMobile && <BurgerButton />}
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
