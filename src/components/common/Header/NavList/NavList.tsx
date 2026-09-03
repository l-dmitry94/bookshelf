import { NavLink } from 'react-router-dom';

import Icon from '@/components/ui/Icon';
import navItems from '@/data/nav.json';

import scss from './NavList.module.scss';

const NavList = () => {
    return (
        <nav className={scss.nav}>
            <ul className={scss.navList}>
                {navItems.map(({ href, label }) => (
                    <li key={href} className={scss.navItem}>
                        <NavLink to={href} className={scss.navLink}>
                            {label}
                            {label === 'Shopping List' && (
                                <Icon variant="cart" className={scss.navIcon} />
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
