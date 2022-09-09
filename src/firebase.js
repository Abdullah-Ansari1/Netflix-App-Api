// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBPPvCTjP4tkXzHmkyVB7GouXs5Z_aTH5Q",
//   authDomain: "netflix-react-js-ad43e.firebaseapp.com",
//   projectId: "netflix-react-js-ad43e",
//   storageBucket: "netflix-react-js-ad43e.appspot.com",
//   messagingSenderId: "1064214454460",
//   appId: "1:1064214454460:web:8eb1c2f8fd339d602ab0b9"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)