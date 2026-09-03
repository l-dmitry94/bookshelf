import AuthButton from '@/components/common/Header/Auth/AuthButton';
import UserBar from '@/components/common/Header/Auth/UserBar';

import scss from './Auth.module.scss';

const Auth = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return <div className={scss.auth}>{isLoggedIn ? <UserBar /> : <AuthButton />}</div>;
};

export default Auth;
