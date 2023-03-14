// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeUT91vNA1sxWBHk2cfjyvT4WL_YQanwk",
  authDomain: "mutavideo-41c9a.firebaseapp.com",
  projectId: "mutavideo-41c9a",
  storageBucket: "mutavideo-41c9a.appspot.com",
  messagingSenderId: "314097944251",
  appId: "1:314097944251:web:05e064466ab10c4648cb9e",
  measurementId: "G-7T2V3147LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
