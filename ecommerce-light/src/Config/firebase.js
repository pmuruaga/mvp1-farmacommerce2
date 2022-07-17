// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKUPJzf8N4fkqhTqcNz2W4NFvjNje_B_E",
//   authDomain: "farmarfrias-web.firebaseapp.com",
//   projectId: "farmarfrias-web",
//   storageBucket: "farmarfrias-web.appspot.com",
//   messagingSenderId: "699139196697",
//   appId: "1:699139196697:web:a8f0611aa7b8c3cdb9e788"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKUPJzf8N4fkqhTqcNz2W4NFvjNje_B_E",
  authDomain: "farmarfrias-web.firebaseapp.com",
  projectId: "farmarfrias-web",
  storageBucket: "farmarfrias-web.appspot.com",
  messagingSenderId: "699139196697",
  appId: "1:699139196697:web:a8f0611aa7b8c3cdb9e788"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();

export default firebase;
