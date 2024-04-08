
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyD_7wGwDC6BzBAdwqRR83PSDJZSSV-nwWA",
	authDomain: "artesanias-market.firebaseapp.com",
	projectId: "artesanias-market",
	storageBucket: "artesanias-market.appspot.com",
	messagingSenderId: "362911557172",
	appId: "1:362911557172:web:5071e827a8c4543b498c61"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




