/** @type {import('tailwindcss').Config} */
export const theme = {
    extend: {
        colors: {
            night: "#090b1a",
            indigo: "#5b5ce2",
            violet: "#8f6bff",
            glass: "rgba(255,255,255,0.08)",
        },
        fontFamily: {
            headline: ["'Roobert', sans-serif"],
            body: ["Inter", "sans-serif"],
        },
        keyframes: {
            pulseSlow: {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.5 },
            },
        },
        animation: {
            pulseSlow: 'pulseSlow 6s ease-in-out infinite',
        },
    },
};
