import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import ShoppingCartPage from 'pages/ShoppingCartPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="cart" element={<ShoppingCartPage />} />
            </Route>
        </Routes>
    );
};

export default App;
