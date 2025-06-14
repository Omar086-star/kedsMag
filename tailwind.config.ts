import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)"],
      },
      colors: {
        violetCustom: "#3b00cc",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
 

        bubbleSide: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { opacity: "0.5" },
          "100%": { transform: "translateY(-100vh)", opacity: "1" },
        },
        sway: {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateY(15px)" },
          "40%": { transform: "translateY(5px)" },
          "50%": { transform: "translateY(-5px)" },

          "85%": { transform: "translateY(15px)" },
          "100%": { transform: "translateX(0px)" },
        },
        rotateBlob: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "translateX(50px)" },
          "50%": { transform: "translateY(-30px)" },
          "60%": { transform: "rotate(180deg)" },
          "70%": { transform: "translateX(-50px)" },
          "75%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateBlobs: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "translateX(50px)" },
          "50%": { transform: "translateY(-30px)" },
          "60%": { transform: "rotate(180deg)" },
          "70%": { transform: "translateX(-50px)" },
          "75%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        rotateBlobS: {
          "0%": { transform: "rotate(0deg)" },
          "5%": { transform: "translateX(50px)" },
          "7%": { borderWidth: "8px" },
          "10%": { transform: "rotate(60deg)" },
          "18%": { transform: "translateX(100px)" },
          "19%": { transform: "rotate(120deg)" },
          "20%": { transform: "translateX(150px)" },
          "22%": { transform: "rotate(180deg)" },
          "23%": { transform: "translateX(200px)" },
          "24%": { borderWidth: "4px" },
          "25%": { transform: "rotate(240deg)" },
          "27%": { transform: "translateX(200px)" },
          "28%": { transform: "rotate(300deg)" },
          "30%": { transform: "translateX(250px)" },
          "35%": { transform: "rotate(360deg)" },
          "40%": { transform: "translateX(300px)" },
          "45%": { transform: "rotate(60deg)" },
          "50%": { transform: "translateX(350px)" },
          "55%": { transform: "rotate(120deg)" },
          "60%": { transform: "translateX(400px)" },
          "65%": { borderWidth: "8px" },
          "70%": { transform: "rotate(180deg)" },
          "75%": { transform: "translateX(450px)" },
          "80%": { transform: "rotate(240deg)" },
          "90%": { transform: "translateX(500px)" },
          "95%": { transform: "rotate(300deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        floatBlob: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(80px)" },
          "22%": { transform: "rotate(320deg)" },
          "40%": { transform: "translateX(40px)" },
          "50%": { transform: "translateX(-40px)" },
          "70%": { transform: "translateY(-80px)" },
        },
        floatBlobs: {
          "0%, 100%": { transform: "translateX(0)" },
          "22%": { transform: "rotate(220deg)" },
          "20%": { transform: "translateX(80px)" },
          "40%": { transform: "translateY(40px)" },
          "50%": { transform: "translateY(-30px)" },
          "70%": { transform: "translateX(-80px)" },
        },
        hoverone: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(100px)" },
          "40%": { transform: "translateX(60px)" },
          "60%": { transform: "translateX(50px)" },
          "80%": { transform: "translateX(90px)" },
        },
        hoverone1: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(50px)" },
          "40%": { transform: "translateX(90px)" },      
              "60%": { transform: "translateX(50px)" },
              "80%": { transform: "translateX(90px)" },


        },       
         hoverone2: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(80px)" },
          "40%": { transform: "translateX(40px)" },
          "60%": { transform: "translateX(50px)" },
          "80%": { transform: "translateX(90px)" },
        },
        go: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(5px)" },
          "40%": { transform: "translateY(10px)" },
 
        },


      },
      animation: {
        float: "float 3s ease-in-out infinite",
        sway: "sway 0.9s ease-in-out infinite alternate",
        rotateBlob: "rotateBlob 15s linear infinite",
        rotateBlobs: "rotateBlobs 15s linear infinite",
        rotateBlobS: "rotateBlobs 13s linear infinite",
        "wavy-border": "wavy-border 1.5s ease-in-out infinite",
        floatBlob: "floatBlob 6s ease-in-out infinite",
        floatBlobs: "floatBlobs 5s ease-in-out infinite",
        bubbleSide: "bubbleSide 8s linear infinite",
        hoverone: "hoverone 5s ease-in-out infinite",
        hoverone1: "hoverone1 6s ease-in-out infinite",
        hoverone2: "hoverone2 7s ease-in-out infinite",
        go: "go 2s ease-in-out infinite",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
