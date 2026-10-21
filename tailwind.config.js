/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        card: "#182128",

        primary: "#2DD4BF",
        "primary-foreground": "#09221F",

        secondary: "var(--color-secondary)",
        "secondary-foreground": "#2DD4BF",

        muted: "var(--color-muted)",
        "muted-foreground": "#A6B0BC",

        border: "#2B3943",

        surface: "#182128",
        highlight: "var(--color-highlight)",

        

       
      },
      

      
      
    },
  },
  plugins: [],
}

