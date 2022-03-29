module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
  variants: {
    extend: {
      // ...
     transform: ['hover', 'focus'],
    }
  }
};
