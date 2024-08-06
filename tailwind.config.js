/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      main: [
        'Helvetica',
        'Roboto',
        'Arial',
        '"YuGothic Medium"',
        '"Yu Gothic Medium"',
        '"Hiragino Kaku Gothic ProN W3"',
        '"Noto Sans JP Regular"'
      ],
      'heading-light': [
        '"Courier Prime Regular"',
        '"YuGothic Medium"',
        '"Yu Gothic Medium"',
        '"Hiragino Kaku Gothic ProN W3"',
        '"Noto Sans JP Regular"'
      ],
      'heading-bold': [
        '"Courier Prime SemiBold"',
        '"YuGothic Bold"',
        '"Yu Gothic Bold"',
        '"Hiragino Kaku Gothic ProN W6"',
        '"Noto Sans JP Medium"'
      ]
    }
  },
  plugins: []
};
