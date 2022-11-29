// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6hDhLRJ-J6UKrl_A8WdliQwdEKU1mxHs",
  authDomain: "foodsapp-b2c02.firebaseapp.com",
  projectId: "foodsapp-b2c02",
  storageBucket: "foodsapp-b2c02.appspot.com",
  messagingSenderId: "1084076809033",
  appId: "1:1084076809033:web:30a9e244f61fa3e2c69898",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
