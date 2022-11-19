import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrZMqxYsx-phZJp1JQc2ADkkxWVusX3uc',
  authDomain: 'cado-2022.firebaseapp.com',
  projectId: 'cado-2022',
  storageBucket: 'cado-2022.appspot.com',
  messagingSenderId: '382760892449',
  appId: '1:382760892449:web:db11699011865370714b60',
  measurementId: 'G-P00ZB9QZHS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
