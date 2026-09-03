import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header';

const Layout = () => {
    const [isDark] = useState(false);

    return (
        <div className={`app ${isDark ? 'dark' : 'light'}`}>
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
