// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqGVY0xXcb1tch-55ThT91zNCNmjLNsJU",
    authDomain: "assess-a88fd.firebaseapp.com",
    projectId: "assess-a88fd",
    storageBucket: "assess-a88fd.firebasestorage.app",
    messagingSenderId: "952304601533",
    appId: "1:952304601533:web:c65bec238695101a67aad4",
    measurementId: "G-GQ18QXS44S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
