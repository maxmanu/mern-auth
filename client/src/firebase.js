// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a971f.firebaseapp.com",
  projectId: "mern-auth-a971f",
  storageBucket: "mern-auth-a971f.appspot.com",
  messagingSenderId: "357404257163",
  appId: "1:357404257163:web:33b913e2e23201d93f9d8e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
