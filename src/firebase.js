// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA057t9eC0EeTa-hI28be04989yONNvFrA",
    authDomain: "clone-bd377.firebaseapp.com",
    databaseURL: "https://clone-bd377-default-rtdb.firebaseio.com",
    projectId: "clone-bd377",
    storageBucket: "clone-bd377.appspot.com",
    messagingSenderId: "162420637475",
    appId: "1:162420637475:web:ce7c8399523da0390fd696",
    measurementId: "G-GS6MFG9X64"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db , auth};