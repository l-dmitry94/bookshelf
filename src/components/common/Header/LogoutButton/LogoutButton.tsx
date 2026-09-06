import { useEffect } from 'react';

import Icon from '@/components/ui/Icon';
import { LoaderOff, LoaderOn } from '@/helpers/loader';
import { useAuthStore } from '@/store/auth.store';

import scss from './LogoutButton.module.scss';

const LogoutButton = () => {
    const logout = useAuthStore(state => state.logout);
    const isLoading = useAuthStore(state => state.isLoading);

    useEffect(() => {
        if (isLoading) {
            LoaderOn();
        } else {
            LoaderOff();
        }

        return () => {
            LoaderOff();
        };
    }, [isLoading]);

    return (
        <button type="button" onClick={logout} className={scss.logoutButton}>
            <span className={scss.text}>Log out</span>
            <Icon variant="arrow-right" className={scss.icon} />
        </button>
    );
};

export default LogoutButton;
