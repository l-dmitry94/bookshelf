import Auth from '../Auth';
import Navigation from '../Navigation';
import LogoutButton from '../Auth/LogoutButton';

import navigationItems from '../navigation.json';

import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
    const isLogged = true;

    return (
        <div>
            <div className={css.overlay}></div>

            <div className={css.content}>
                <div className={css.wrapper}>
                    <div>
                        <Auth />
                        <div className={css.navigationWrapper}>
                            <Navigation items={navigationItems} />
                        </div>
                    </div>
                    {isLogged && <LogoutButton />}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
