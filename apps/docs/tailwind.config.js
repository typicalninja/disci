module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [require('daisyui')],
	corePlugins: {
		preflight: false,
	},
	daisyui: {
		themes: [
            {
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					primary: '#7289da', // Discord brand color
					secondary: '#99aab5',
					accent: '#2c2f33',
					neutral: '#f2f3f5',
					'base-100': '#ffffff',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				  },
				  dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: '#7289da', // Discord brand color
					secondary: '#99aab5',
					accent: '#2c2f33',
					neutral: '#191b28',
					'base-100': '#2c2f33',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				  }
			}
		],
	},
};