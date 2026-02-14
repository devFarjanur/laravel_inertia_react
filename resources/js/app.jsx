import "./bootstrap";
import "../css/app.css";

import { BrowserRouter as Router } from "react-router-dom";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const customerPages = import.meta.glob("./customer/**/*.jsx", {
            eager: true,
        });
        const adminPages = import.meta.glob("./admin/**/*.jsx", {
            eager: true,
        });

        const pages = { ...customerPages, ...adminPages };
        return pages[`./customer/${name}.jsx`] || pages[`./admin/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Router>
                <App {...props} />
            </Router>,
        );
    },
});
