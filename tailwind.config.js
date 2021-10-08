module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false,
  }
}
