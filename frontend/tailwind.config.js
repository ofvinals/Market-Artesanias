/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {

		extend: {
			colors: {
				primary: '#E98C00',
				secondary: '#FEEACC',
				general: '#563300',
				specific: '#E98C00',
			},
			fontSize: {
				'1tl':'125px',
				'2tl':'70px',
				'3tl': '40px',
				'tlv': '32px',
			},
			backgroundImage: {
				'portada': "url('/public/fotoportada.jpg')",
			 }
		},
	},
	plugins: [],
};
