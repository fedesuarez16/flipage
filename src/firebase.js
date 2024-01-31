// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdv1FykijTkePtUlsX-fALm4LgEU2TK0I",
  authDomain: "aserraderosv.firebaseapp.com",
  projectId: "aserraderosv",
  storageBucket: "aserraderosv.appspot.com",
  messagingSenderId: "540066917790",
  appId: "1:540066917790:web:40b3960927f91383973a8f",
  measurementId: "G-YZ2GW5X35P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);