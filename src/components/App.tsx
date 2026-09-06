import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import PrivateRoute from '@/components/PrivateRoute';
import { LoaderOff, LoaderOn } from '@/helpers/loader';
import HomePage from '@/pages/HomePage';
import ShoppingListPage from '@/pages/ShoppingListPage';
import { useAuthStore } from '@/store/auth.store';

const App = () => {
    const { initAuth, isInitialized } = useAuthStore();

    useEffect(() => {
        const unsubscribe = initAuth();
        return () => unsubscribe();
    }, [initAuth]);

    useEffect(() => {
        if (!isInitialized) {
            LoaderOn();
        } else {
            LoaderOff();
        }

        return () => {
            LoaderOff();
        };
    }, [isInitialized]);

    if (!isInitialized) {
        return null;
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="shopping-list"
                    element={<PrivateRoute component={<ShoppingListPage />} redirectTo="/" />}
                />
            </Route>
        </Routes>
    );
};

export default App;
