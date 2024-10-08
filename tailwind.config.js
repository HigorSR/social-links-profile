/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "Green": "hsl(75, 94%, 57%)",

      "White": "hsl(0, 0%, 100%)",

      "Grey-700": "hsl(0, 0%, 20%)",
      "Grey-800": "hsl(0, 0%, 12%)",
      "Grey-900": "hsl(0, 0%, 8%)"
    }
  },
  plugins: [],
};
