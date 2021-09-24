module.exports = {
	plugins: {
		'@fullhuman/postcss-purgecss': {
			content: ['./layouts/**/*.html'],
			safelist: [
				'p', 'span', 'h1', 'h2', 'h3'
			],
		},
		'postcss-csso': {
			restructure: true,
		},
	},
};