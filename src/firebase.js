// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPKavECjG2Ng1q1zO9bje_r_Pg6JFo1Fc",
  authDomain: "chat-app-26af6.firebaseapp.com",
  projectId: "chat-app-26af6",
  storageBucket: "chat-app-26af6.appspot.com",
  messagingSenderId: "666302146738",
  appId: "1:666302146738:web:9fce6a2dc090902ee101ab",
  measurementId: "G-1100WYZSR1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
