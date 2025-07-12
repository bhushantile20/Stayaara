// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//first one 
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "real-estate-54ca1.firebaseapp.com",
//   projectId: "real-estate-54ca1",
//   storageBucket: "real-estate-54ca1.appspot.com",
//   messagingSenderId: "763525281730",
//   appId: "1:763525281730:web:8a005028be4f5cbcddc85b",
//   measurementId: "G-K5CC82LFBB",
// };

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "realestateapp-354bc.firebaseapp.com",
  projectId: "realestateapp-354bc",
  storageBucket: "realestateapp-354bc.firebasestorage.app",
  messagingSenderId: "485883410128",
  appId: "1:485883410128:web:6d3f80a16c31b66ae990d5",
  measurementId: "G-BF4V28C705"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);


