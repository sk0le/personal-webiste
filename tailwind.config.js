/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "Poppins",
        'visuelt': "Visuelt Pro",
        "inter": "Inter"
      },
      animation: {
        'left-right': 'leftRightKey 2s ease-in-out infinite'
      },
      keyframes: {
        leftRightKey: {
          '0%': { transform: "translateX(0px)" },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      }
    },
  },
  plugins: [],
}
