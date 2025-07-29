// postcss.config.cjs
/** @type {import('postcss').ProcessorOptions} */
module.exports = {
  plugins: {
    // Tailwind v4’s standalone PostCSS plugin
    '@tailwindcss/postcss': {},
    // Autoprefixer
    autoprefixer: {},
  },
};
