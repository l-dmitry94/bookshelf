/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
            },
            colors(theme) {
                return {
                    primary: {
                        DEFAULT: '#111111',
                        white: '#ffffff',
                        violet: '#4f2ee8',
                        yellow: '#eac645',
                    },
                    black: {
                        ...theme.colors.black,
                        100: '#202024',
                    },
                };
            },
        },

        screens: {
            mobile: '375px',
            tablet: '768px',
            desktop: '1440px',
        },
    },
    plugins: [],
};
