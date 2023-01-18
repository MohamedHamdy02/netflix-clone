// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzBvATkhSh43dfVLFAWWiRORc2dV-q5o0",
  authDomain: "netflix-clone-98faa.firebaseapp.com",
  projectId: "netflix-clone-98faa",
  storageBucket: "netflix-clone-98faa.appspot.com",
  messagingSenderId: "672424476109",
  appId: "1:672424476109:web:5d6fc7889327c890eb9884",
  measurementId: "G-MFBQ4P8JHQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }