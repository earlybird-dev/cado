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
  apiKey: 'AIzaSyCmeVBKh_tziSsLg9gepqQdsNLhGo6lu3s',
  authDomain: 'cadobet.firebaseapp.com',
  projectId: 'cadobet',
  storageBucket: 'cadobet.appspot.com',
  messagingSenderId: '425266774498',
  appId: '1:425266774498:web:8b0156aab8ced00c35f9bb',
  measurementId: 'G-XH3WC8WDQK',
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
