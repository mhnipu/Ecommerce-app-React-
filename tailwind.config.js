/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: "Onest",
        bodyFont: "Onest",
      },
      colors: {
        app_blue: '#121921',
        app_light: '#232F3E',
        app_yellow: '#febd69',
        whiteText: '#ffffff',
        lightText: '#ccc',
        quantity_box: '#f0f2f2',
        footerBottom: '#131a22',
      },
      boxShadow: {
        testShadow: '0px 0px 32px 1px rgba(199,199,199,1)',
        appShadow: '0 0 3px 2px rgb(288 121 17 / 50%)',
      },
    },
  },
  plugins: [],
}

