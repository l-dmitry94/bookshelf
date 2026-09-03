import { Link } from 'react-router-dom';

import Icon from '@/components/ui/Icon';

import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={scss.logo}>
            <Icon variant="logo" className={scss.icon} />
            <Icon variant="bookshelf" className={scss.iconText} />
        </Link>
    );
};

export default Logo;
