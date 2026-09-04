import Icon from '@/components/ui/Icon';

import scss from './AuthButton.module.scss';

const AuthButton = () => {
    return (
        <button type="button" className={scss.authButton}>
            <span className={scss.text}>Sign up</span>
            <Icon variant="arrow-right" className={scss.icon} />
        </button>
    );
};

export default AuthButton;
