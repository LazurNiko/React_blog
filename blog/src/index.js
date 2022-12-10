import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8cRQEzspAnlqSzqe2-R2WXtD-TcB8el0",
  authDomain: "reactblog-34a5a.firebaseapp.com",
  projectId: "reactblog-34a5a",
  storageBucket: "reactblog-34a5a.appspot.com",
  messagingSenderId: "475770951058",
  appId: "1:475770951058:web:d688772578389a4af55d4b",
  measurementId: "G-LZ2QWJ8PL3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
