
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { v4 } from 'uuid';

const firebaseConfig = {
	apiKey: "AIzaSyD_7wGwDC6BzBAdwqRR83PSDJZSSV-nwWA",
	authDomain: "artesanias-market.firebaseapp.com",
	projectId: "artesanias-market",
	storageBucket: "artesanias-market.appspot.com",
	messagingSenderId: "362911557172",
	appId: "1:362911557172:web:5071e827a8c4543b498c61"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const authFire = getAuth(app);
export const db = getFirestore(app);

export async function uploadFile(file) {
	const storageRef = ref(storage, v4());
	await uploadBytes(storageRef, file);
	const url = await getDownloadURL(storageRef);
	return url;
}

export default authFire;

