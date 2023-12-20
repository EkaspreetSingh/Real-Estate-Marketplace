// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bd6fc.firebaseapp.com",
  projectId: "mern-estate-bd6fc",
  storageBucket: "mern-estate-bd6fc.appspot.com",
  messagingSenderId: "560230841198",
  appId: "1:560230841198:web:e8e20da3285a973eaa5f7f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
