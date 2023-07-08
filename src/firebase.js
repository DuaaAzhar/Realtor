// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-0zNI5NGsyH_-ZX_9C_g3meRMuj_WeE",
  authDomain: "realtorclone-7fb15.firebaseapp.com",
  projectId: "realtorclone-7fb15",
  storageBucket: "realtorclone-7fb15.appspot.com",
  messagingSenderId: "902680364064",
  appId: "1:902680364064:web:8b3937bd50a166e1866845"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore()
