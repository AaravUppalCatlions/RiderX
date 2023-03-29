import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDz6aCZQB5YEqY_I20uWYWr6GqQQrlosPg",
    authDomain: "projct-787878.firebaseapp.com",
    projectId: "projct-787878",
    storageBucket: "projct-787878.appspot.com",
    messagingSenderId: "1048041794223",
    appId: "1:1048041794223:web:baa67b2ce494466a29825a"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


