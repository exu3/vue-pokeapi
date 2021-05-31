module.exports = {
  purge: { content: ["./public/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pokeSolid: "Pokemon Solid",
        pokeHollow: "Pokemon Hollow",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
