// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHq98jwaKw3Ypja97AxRpWB7zabH6Upjc",
  authDomain: "fir-firebase-b55a4.firebaseapp.com",
  projectId: "fir-firebase-b55a4",
  storageBucket: "fir-firebase-b55a4.firebasestorage.app",
  messagingSenderId: "708153855318",
  appId: "1:708153855318:web:e493a4c41377d8b2fc9af7",
  measurementId: "G-H3HLZ7E7E0",
  databaseURL: "https://fir-firebase-b55a4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
