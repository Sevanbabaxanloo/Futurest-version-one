/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        200: "300",
      },
      screens: {
        xxs: "320px",
        xxb: "337px",
        xs: "375px",
        xbm: "425px",
        sm: "450px",
        sbm: "469px",
        smm: "570px",
        md: "768px",
        mbd: "797px",
        mmd: "975px",
        lgs: "815px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      backgroundImage: {
        topgradient:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
        buttongradient:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};
