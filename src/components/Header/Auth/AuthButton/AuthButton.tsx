import { icons } from 'assets/icons';

import css from './AuthButton.module.css';

const AuthButton = () => {
    return (
        <button className={css.authButton}>
            <span className={css.authButtonText}>Sign up</span>
            <svg className={css.arrowRightIcon}>
                <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
        </button>
    );
};

export default AuthButton;
