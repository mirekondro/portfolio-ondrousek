// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDczUFTV7WpC8r09lV5ot2NF1G-qhoNio",
    authDomain: "portfolio-8b363.firebaseapp.com",
    projectId: "portfolio-8b363",
    storageBucket: "portfolio-8b363.appspot.com",
    messagingSenderId: "682876696902",
    appId: "1:682876696902:web:daf89effa237ebcf39cd47",
    measurementId: "G-GQECYDXH6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);