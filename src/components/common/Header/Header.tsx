import { useState } from 'react';

import AuthButton from '@/components/common/Header/AuthButton';
import BurgerButton from '@/components/common/Header/BurgerButton';
import BurgerMenu from '@/components/common/Header/BurgerMenu';
import Logo from '@/components/common/Header/Logo';
import NavigationBar from '@/components/common/Header/NavigationBar';
import ThemeSwitcher from '@/components/common/Header/ThemeSwitcher';
import UserBar from '@/components/common/Header/UserBar';
import Container from '@/components/ui/Container';
import { useMedia } from '@/hooks/useMedia';

import scss from './Header.module.scss';

const Header = () => {
    const isLoggedIn = true;
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
    const { isMobile } = useMedia();

    return (
        <header className={scss.header}>
            <div className={scss.content}>
                <Container>
                    <div className={scss.wrapper}>
                        <div className={scss.leftWrapper}>
                            <Logo />

                            {!isMobile && isLoggedIn && <NavigationBar />}
                        </div>

                        <div className={scss.rightWrapper}>
                            <ThemeSwitcher />

                            {!isMobile &&
                                (isLoggedIn ? <UserBar isShowMenu={true} /> : <AuthButton />)}

                            {isMobile && (
                                <BurgerButton
                                    burgerMenuIsOpen={burgerMenuIsOpen}
                                    onClick={() => setBurgerMenuIsOpen(prev => !prev)}
                                />
                            )}
                        </div>
                    </div>
                </Container>
            </div>

            <BurgerMenu isLoggedIn={isLoggedIn} burgerMenuIsOpen={burgerMenuIsOpen} />
        </header>
    );
};

export default Header;
