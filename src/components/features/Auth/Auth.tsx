import { useState } from 'react';

import LoginForm from '@/components/features/Auth/LoginForm';
import RegisterForm from '@/components/features/Auth/RegisterForm';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            {isLogin ? (
                <LoginForm setIsLogin={setIsLogin} />
            ) : (
                <RegisterForm setIsLogin={setIsLogin} />
            )}
        </>
    );
};

export default Auth;
