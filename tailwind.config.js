/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "ui-sans-serif", "system-ui"],
                serif: ["Playfair Display", "ui-serif", "Georgia"],
        },
    },
    plugins: [],
}
}
