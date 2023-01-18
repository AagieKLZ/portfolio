const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-blue" : { 100 : "#080B22", 200 : "#181E55", 300 : "#171492"},
				"light-blue" : {100 : "#00FFC2"},
				"gray" : {100 : "#DCD7DA"}
			},
			fontFamily: {
				gruppo : "gruppo",
				content : "montserrat",
				goldman : "goldman"
			},
			animation: {
				'slide-right' : 'slide2',
				'slide-top' : 'slideicon 1s linear'
			},
			keyframes: {
				slide2 : {
					from: {transform: "translateX(0px)"},
					to: {transform: "translateX(250px)"}
				},
				slideicon : {
					from: {transform: "translateY(250px)"},
					to: {transform: "translateY(0px)"}
				},
				slidemenu : {
					from: {transform: "translateX(250px)"},
					to: {transform: "translateX(0px)"}
				}
			}
		},
	},
	plugins: [],
}
