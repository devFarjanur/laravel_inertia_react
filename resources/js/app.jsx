import './bootstrap';
import '../css/app.css';
import '../css/satoshi.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: name => {
        const customerPages = import.meta.glob('./Customer/**/*.jsx', { eager: true });
        const adminPages = import.meta.glob('./Admin/**/*.jsx', { eager: true });

        const pages = { ...customerPages, ...adminPages };
        return pages[`./Customer/${name}.jsx`] || pages[`./Admin/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Router>
                <App {...props} />
            </Router>
        );
    },
});
