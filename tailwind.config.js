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
				main: [
					'sans-serif',
					'YuGothic',
					'Yu Gothic',
					'Hiragino Kaku Gothic ProN',
					'ヒラギノ角ゴ ProN W3',
					'ＭＳ ゴシック',
					'sans-serif'
				],
				heading: [
					'Courier',
					'Courier New',
					'YuGothic',
					'Yu Gothic',
					'Hiragino Kaku Gothic ProN',
					'ヒラギノ角ゴ ProN W3',
					'ＭＳ ゴシック',
					'monospace'
				],
				'heading-light': [
					'Courier',
					'Courier New',
					'YuGothic',
					'Yu Gothic',
					'Hiragino Kaku Gothic ProN',
					'ヒラギノ角ゴ ProN W3',
					'ＭＳ ゴシック',
					'monospace'
				]
			}
		}
	},
	plugins: []
};
