// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk3FtFjTBDLUusASqS30k5FLoLmTg99tg",
  authDomain: "myecom-bca62.firebaseapp.com",
  projectId: "myecom-bca62",
  storageBucket: "myecom-bca62.appspot.com",
  messagingSenderId: "591378280288",
  appId: "1:591378280288:web:e99a3d9ac01371d462b805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
