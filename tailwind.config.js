module.exports = {
	content: [
		"./app/index.html",
		"./app/**/*.{vue,js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				glow: "0 0 20px #0000"
			}
		}
	},
	plugins: []
};
