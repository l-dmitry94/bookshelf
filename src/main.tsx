import '@/services/firebase';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';

import 'react-loading-skeleton/dist/skeleton.css';
import '@/scss/style.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SkeletonTheme>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SkeletonTheme>
    </StrictMode>
);
