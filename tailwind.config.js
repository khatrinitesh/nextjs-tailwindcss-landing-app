/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector"],
  theme: {
    extend: {
      fontFamily:{
        'poppinsregular':'PoppinsRegular'
      },
      fontSize:{
        'fsheadtitle': ['clamp(1.8vh, 3.81vh, 10.58vh)'],
        'fssubtitle': ['clamp(1.8vh, 3vh, 10.58vh)'],
        'fsdesc': ['clamp(1.8vh, 3vh, 10.58vh)'],
        'fsh4': ['clamp(1.8vh, 3vh, 1.875rem)'],
        'fsh5': ['clamp(1.8vh, 3vh, 1.5rem)'],
        'fsh14': ['clamp(1.8vh, 1.48vh, 1.25rem)'],
        'fsbody': ['clamp(1.8vh, 3vh, 1rem)'],
      },
      colors: {
        primary:'#c13d60',
        secondary:'#55872c',
        primaryLight: "#fff", // Light theme primary color
        textLight:'#000', // Light theme primary color
        primaryDark: "#000", // Dark theme primary color
        textDark:'#fff', // Dark theme primary color
      },
    },
  },
  plugins: [],
};
