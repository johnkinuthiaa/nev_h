// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebase_API_KEY,
  authDomain: "pata-keja-ke.firebaseapp.com",
  projectId: "pata-keja-ke",
  storageBucket: "pata-keja-ke.appspot.com",
  messagingSenderId: "382144798886",
  appId: "1:382144798886:web:c06922c8f329fd30ad5467",
  measurementId: "G-5XPKHL08KW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
