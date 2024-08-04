// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA39Jq-124zvJMn-uHh-R-IoikgLINqa1Q",
  authDomain: "pedro-react-app-c28b7.firebaseapp.com",
  projectId: "pedro-react-app-c28b7",
  storageBucket: "pedro-react-app-c28b7.appspot.com",
  messagingSenderId: "950208985835",
  appId: "1:950208985835:web:d8d8278483a69ce23d9cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export { db };

