import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import HomePage from '@/pages/HomePage';
import ShoppingListPage from '@/pages/ShoppingListPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="shopping-list" element={<ShoppingListPage />} />
            </Route>
        </Routes>
    );
};

export default App;
