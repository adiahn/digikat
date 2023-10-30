
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111947",
        secondary: "rgb(0, 51, 153)",
        background: "#2121215e",
        background_2: "#22303c",
        nav_active:    "#2121215e",
        nav_toggle_color: "#fcfcfc",
        text_color: "#333333",
        home_button: "#63BBFF"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

