import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCIuqNQnbWaBoX4HgK4lLQ-O7MQcNPvR60",
    authDomain: "eshop-3eeee.firebaseapp.com",
    projectId: "eshop-3eeee",
    storageBucket: "eshop-3eeee.appspot.com",
    messagingSenderId: "480747293745",
    appId: "1:480747293745:web:f32ca43c5efab4fb091910"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage, app };

