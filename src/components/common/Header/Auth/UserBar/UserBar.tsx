import Icon from '@/components/ui/Icon';

import scss from './UserBar.module.scss';

const UserBar = () => {
    const avatar = null;

    return (
        <div className={scss.userBar}>
            <button type="button" className={scss.btn}>
                <div className={scss.wrapper}>
                    {avatar ? (
                        <img src={avatar} alt="avatar" className={scss.avatar} />
                    ) : (
                        <div className={scss.defaultIconWrapper}>
                            <Icon variant="user" className={scss.defaultIcon} />
                        </div>
                    )}

                    <span className={scss.name}>Stephen</span>
                </div>

                <Icon variant="caret-down" className={scss.arrowDown} />
            </button>
        </div>
    );
};

export default UserBar;
