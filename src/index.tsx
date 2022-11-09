import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7oSnd1-G5BSWYU10Yyoscrtno0dsP0_4",
  authDomain: "ibet-webet.firebaseapp.com",
  projectId: "ibet-webet",
  storageBucket: "ibet-webet.appspot.com",
  messagingSenderId: "20992600791",
  appId: "1:20992600791:web:9f4a8c7cb31fffd2469e92",
  measurementId: "G-2RDG04PHWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
