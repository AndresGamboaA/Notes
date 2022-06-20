// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2Rioj8AFxat31rBbkoeIWLPcBrigELk",
  authDomain: "notes-3cfda.firebaseapp.com",
  projectId: "notes-3cfda",
  storageBucket: "notes-3cfda.appspot.com",
  messagingSenderId: "342560518103",
  appId: "1:342560518103:web:1c9ff5b1120df6bbf52592"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);