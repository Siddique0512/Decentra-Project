// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0z6YovxnpfpCkr8zqxQYoLwgW5x6Nojs",
  authDomain: "decentral-ccf1f.firebaseapp.com",
  projectId: "decentral-ccf1f",
  storageBucket: "decentral-ccf1f.appspot.com",
  messagingSenderId: "193103188085",
  appId: "1:193103188085:web:0d47e70a0fc37de609a83c",
  measurementId: "G-DY08W8SG6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };