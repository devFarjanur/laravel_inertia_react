import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
};
