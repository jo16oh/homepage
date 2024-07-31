/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textColor: {
				white: '#F5F5F5',
				black: '#242424'
			},
			fontFamily: {
				main: ['Noto Sans Japanese', 'sans-serif'],
				heading: ['Courier', 'Courier Prime', 'Sawarabi Gothic', 'monospace'],
				'heading-light': ['Courier Prime', 'Sawarabi Gothic', 'monospace']
			}
		}
	},
	plugins: []
};
