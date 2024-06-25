import { icons } from 'assets/icons';

import css from './LogoutButton.module.css';

const LogoutButton = () => {
    return (
        <button className={css.logoutButton}>
            <span className={css.logoutButtonText}>Log out</span>
            <svg className={css.arrowRightIcon}>
                <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
        </button>
    );
};

export default LogoutButton;
