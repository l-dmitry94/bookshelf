import { Link } from 'react-router-dom';

import { icons } from 'assets/icons';

import css from './Logo.module.css';

const Logo = () => {
    return (
        <Link to="/" className={css.logo}>
            <svg className={css.logoIcon}>
                <use href={`${icons}#icon-logo`}></use>
            </svg>
            <span className={css.logoText}>Bookshelf</span>
        </Link>
    );
};

export default Logo;
