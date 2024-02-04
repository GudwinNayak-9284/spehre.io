const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#7B74FF',
        'secondary': '#322E71',
        'tertiary': '#ADACC8',
      },
      
    },
   
  },
  plugins: [],
});
