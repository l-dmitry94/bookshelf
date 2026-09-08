import { type FC, useState } from 'react';

import LogoutButton from '@/components/common/Header/LogoutButton';
import Icon from '@/components/ui/Icon';

import scss from './UserBar.module.scss';

interface Props {
    isShowMenu: boolean;
    username: string | null;
}

const UserBar: FC<Props> = ({ isShowMenu = false, username }) => {
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const avatar = null;

    return (
        <div className={scss.userBarWrapper}>
            <div onClick={() => setShowLogoutButton(prev => !prev)} className={scss.userBar}>
                <div className={scss.wrapper}>
                    <div className={scss.imageWrapper}>
                        {avatar ? (
                            <img src={avatar} alt="Name" className={scss.avatar} />
                        ) : (
                            <Icon variant="user" className={scss.userIcon} />
                        )}
                    </div>
                    <span className={scss.name}>{username}</span>
                </div>

                <Icon variant="caret-down" className={scss.arrowIcon} />
            </div>

            {isShowMenu && showLogoutButton && <LogoutButton />}
        </div>
    );
};

export default UserBar;
