/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'p': ['"Lato 300"'],
			'em': ['"Lato"',],
			'strong': ['"Lato bold"'], 
			'h1': ['"Roboto Serif"'], 
			'header': ['"Roboto 600"'], 
		  }, 
		extend: {},
	},
	plugins: [],
}