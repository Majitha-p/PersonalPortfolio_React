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

        card: "var(--color-card)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "var(--color-primary-foreground)",

        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",

        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",

        border: "var(--color-border)",

        surface: "var(--color-surface)",
        highlight: "var(--color-highlight)",

        

       
      },
      

      
      
    },
  },
  plugins: [],
}

