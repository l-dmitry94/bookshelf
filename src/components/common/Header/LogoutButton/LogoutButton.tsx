import Icon from '@/components/ui/Icon';

import scss from './LogoutButton.module.scss';

const LogoutButton = () => {
    return (
        <button type="button" className={scss.logoutButton}>
            <span className={scss.text}>Log out</span>
            <Icon variant="arrow-right" className={scss.icon} />
        </button>
    );
};

export default LogoutButton;
