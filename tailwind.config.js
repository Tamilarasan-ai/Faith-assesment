const withMT = require("@material-tailwind/react/utils/withMT");
import flowbitePlugin from 'flowbite/plugin';

// Replace the import statement for withMT

/** @type {import('tailwindcss').Config} */
module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin
  ]
});
