import clsx from 'clsx';
import type { FC } from 'react';

import { booksImages } from '@/assets/img/books';
import AuthButton from '@/components/common/Header/AuthButton';
import LogoutButton from '@/components/common/Header/LogoutButton';
import NavigationBar from '@/components/common/Header/NavigationBar';
import UserBar from '@/components/common/Header/UserBar';
import Container from '@/components/ui/Container';

import scss from './BurgerMenu.module.scss';

interface Props {
    isLoggedIn: boolean;
    burgerMenuIsOpen: boolean;
}

const BurgerMenu: FC<Props> = ({ isLoggedIn, burgerMenuIsOpen }) => {
    return (
        <div className={clsx(scss.burgerMenu, burgerMenuIsOpen && scss.burgerMenuActive)}>
            <div className={scss.imageWrapper}>
                <img
                    src={booksImages.books}
                    alt="Books image"
                    srcSet={`${booksImages.books} 1x, ${booksImages.books_2x} 2x`}
                    className={scss.image}
                />
            </div>

            <div className={scss.wrapper}>
                <Container className={scss.container}>
                    {isLoggedIn ? (
                        <>
                            <UserBar />
                            <NavigationBar />
                            <LogoutButton />
                        </>
                    ) : (
                        <AuthButton />
                    )}
                </Container>
            </div>
        </div>
    );
};

export default BurgerMenu;
