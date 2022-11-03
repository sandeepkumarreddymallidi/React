import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Employee from './Employee';
import reportWebVitals from './reportWebVitals';
import CounterFunction from './CounterFunction'
import Student from './StudentData';
import Axios from './axios/Axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Axios/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

