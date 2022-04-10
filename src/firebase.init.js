// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaJcmft1pHWgzHnCdB9FgnUG5WGlAdNNQ",
  authDomain: "ema-john-store-41564.firebaseapp.com",
  projectId: "ema-john-store-41564",
  storageBucket: "ema-john-store-41564.appspot.com",
  messagingSenderId: "921424894521",
  appId: "1:921424894521:web:933f2390585b871cb94be8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
