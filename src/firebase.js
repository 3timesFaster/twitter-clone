// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZlEaopdCvH4bBerRlE6-YJIq1VuFE4rY",
  authDomain: "twitter-clone-4e23d.firebaseapp.com",
  projectId: "twitter-clone-4e23d",
  storageBucket: "twitter-clone-4e23d.appspot.com",
  messagingSenderId: "286852832439",
  appId: "1:286852832439:web:e1dc7b6f08b3373a700132",
  measurementId: "G-W80PPGTWTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);