import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBRb_pvkcDtEQ19173FVIzE_3vMWEav1DA",
  authDomain: "reactx-firebase.firebaseapp.com",
  projectId: "reactx-firebase",
  storageBucket: "reactx-firebase.firebasestorage.app",
  messagingSenderId: "117253198741",
  appId: "1:117253198741:web:0721bc185355c38b42dc9c",
  measurementId: "G-54ZF60J9TM",
  databaseURL:"https://reactx-firebase-default-rtdb.firebaseio.com"

};



 export const app = initializeApp(firebaseConfig);
