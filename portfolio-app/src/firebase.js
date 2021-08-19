import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD2ttT1daEKyYBw8PkPUJIRMUfcESwD_h4",
    authDomain: "portfolio-fe444.firebaseapp.com",
    projectId: "portfolio-fe444",
    storageBucket: "portfolio-fe444.appspot.com",
    messagingSenderId: "635728342492",
    appId: "1:635728342492:web:8cca6c7169e7bbc2e43319",
    measurementId: "G-1JEWF77SDW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
