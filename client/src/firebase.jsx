// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pata-keja-5d086.firebaseapp.com",
  projectId: "pata-keja-5d086",
  storageBucket: "pata-keja-5d086.appspot.com",
  messagingSenderId: "94078031677",
  appId: "1:94078031677:web:f5d3467bdfefad7422d754"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);