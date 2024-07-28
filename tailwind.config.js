/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textColor: {
				white: '#F5F5F5',
				black: '242424'
			},
			fontSize: {
				xxs: '0.5625rem',
				xs: '0.6875rem',
				sm: '0.875rem',
				'2xl': '1.625rem'
			},
			fontFamily: {
				main: ['Noto Sans Japanese', 'sans-serif'],
				heading: ['Courier', 'Sawarabi Gothic', 'sans-serif'],
				'heading-light': ['Courier Prime', 'Sawarabi Gothic', 'sans-serif']
			}
		}
	},
	plugins: []
};
