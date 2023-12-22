/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      blue: "#423EF4",
      kap: "#007eff",
      offWhite: "#F5F7FA",
      green: "#00B878",
      pink: "#F4C7DD",
      skyBlue: "#A7CBF4",
      yellow: "#FFDB33",
      orange: "#FF6B00",
      greenDark: "#018565",
      whiteFaded: "#FFFDF2",
      black: "#272727",
      gray: "#4A4A4A",
      lightBlue: "#A7CBF4",
      paleBlue: "#DAF3E9",
      lightGray: "#B8B6B0",
      white: "#ffffff",
      purple: "#4b286e",
      lightBlack:"#191919",
      blaack:"#2C2C2C",
      blacked:"#000000",
      dimBlack:"#000000f5",
      kapblue:'#007cfb'
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "1.5px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      dropShadow: {
        '3xl': '0px 0px 85px rgba(0,126,255,0.3)',
        '4xl': [
            '0 35px 35px rgb(0 126 255)',
            '0 45px 65px rgb(0 126 255)'
        ]
      }

    },
    fontFamily: {
      quick: ["QUICK"],
      quickB: ["QUICK-BOLD"],
      quickT: ["QUICK-THIN"],
      quickR: ["QUICK-REG"],
      rale: ["RALE"],
    },
  },

  plugins: [require("tailwind-scrollbar"), require('flowbite/plugin')],
  
};
