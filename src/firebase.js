// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyC5CEnmgkbQUji62Ug_AgI-XF29bfx1Y",
  authDomain: "netflixxx-66f37.firebaseapp.com",
  projectId: "netflixxx-66f37",
  storageBucket: "netflixxx-66f37.firebasestorage.app",
  messagingSenderId: "664041801129",
  appId: "1:664041801129:web:94801df968153d732870b8",
  measurementId: "G-P4PT1EKL0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();