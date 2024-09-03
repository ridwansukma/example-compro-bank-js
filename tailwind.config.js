/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'sbi-primary': '#0052B4',
                'sbi-secondary': '#7E7E7E',
                'sbi-black': '#2F2F2F',
            },
        },
    },
    plugins: [],
}
