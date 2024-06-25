
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvqPAtBcxM0CiCHiDBTtznzb9kHPhD1lE",
    authDomain: "netflix-clone-a3959.firebaseapp.com",
    projectId: "netflix-clone-a3959",
    storageBucket: "netflix-clone-a3959.appspot.com",
    messagingSenderId: "658514585649",
    appId: "1:658514585649:web:f6f0ec7720469724388d10"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
