import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyB4-cQUAwWKJrCjPohYTgIPv-FW7SS4YL0",
  authDomain: "react-utn22.firebaseapp.com",
  projectId: "react-utn22",
  storageBucket: "react-utn22.appspot.com",
  messagingSenderId: "426916166039",
  appId: "1:426916166039:web:67027e46206ac8d4016cd2"
};

firebase.initializeApp(firebaseConfig);


export default firebase