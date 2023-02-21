import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let clock = setInterval(function (){
    return <h1>{ new Date().toLocaleTimeString() }</h1>
},1000)


setInterval(function (){
    root.render(
       <h1>{ new Date().toLocaleTimeString() }</h1>
    );
},1000)

/*root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);*/

reportWebVitals();
