/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				tertiary: '#C49A6C',
				background: { focus: '#F6F4F4', gray: '#4A4A4A' }
			}
		}
	},
	plugins: []
};
