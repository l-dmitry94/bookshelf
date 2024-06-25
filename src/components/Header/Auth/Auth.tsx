import { useState } from 'react';

import UserProfile from './UserProfile';
import AuthButton from './AuthButton';

const Auth = () => {
    const [isLogged] = useState<boolean>(false);

    return <>{isLogged ? <UserProfile /> : <AuthButton />}</>;
};

export default Auth;
