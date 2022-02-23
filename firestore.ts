// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} = {
  apiKey: "AIzaSyDUasissgD0q7zIrxwyH1ROVLBjB4ojdM4",
  authDomain: "moneytracker-7c315.firebaseapp.com",
  projectId: "moneytracker-7c315",
  storageBucket: "moneytracker-7c315.appspot.com",
  messagingSenderId: "253890946116",
  appId: "1:253890946116:web:8dca2779ccaa0bc3a24811",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
