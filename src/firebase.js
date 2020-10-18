import firebase from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDRg3LrNPCy4Ol1K_LwULMrD6PSwUTEWmY",
  authDomain: "twitter-clone-ffe72.firebaseapp.com",
  databaseURL: "https://twitter-clone-ffe72.firebaseio.com",
  projectId: "twitter-clone-ffe72",
  storageBucket: "twitter-clone-ffe72.appspot.com",
  messagingSenderId: "220183153130",
  appId: "1:220183153130:web:065500c24a31ee4ccaca93",
  measurementId: "G-RM0QJ3ZRTL",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
