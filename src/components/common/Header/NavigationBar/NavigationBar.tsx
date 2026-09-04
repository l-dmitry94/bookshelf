import { NavLink } from 'react-router-dom';

import Icon from '@/components/ui/Icon';
import navData from '@/data/navigation.json';

import scss from './NavigationBar.module.scss';

const NavigationBar = () => {
    return (
        <nav className={scss.navigationBar}>
            <ul className={scss.list}>
                {navData.map(item => (
                    <li key={item.path} className={scss.item}>
                        <NavLink to={item.path} className={scss.link}>
                            {item.label}
                            {item.label === 'Shopping List' && (
                                <Icon variant="cart" className={scss.icon} />
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
