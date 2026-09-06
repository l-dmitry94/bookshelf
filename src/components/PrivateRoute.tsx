import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStore } from '@/store/auth.store';

interface Props {
    component: ReactNode;
    redirectTo?: string;
}

const PrivateRoute: FC<Props> = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
