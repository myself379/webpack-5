module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    // require('@tailwindcss/jit'),
    require('autoprefixer'),
  ],
}
