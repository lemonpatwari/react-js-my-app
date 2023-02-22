import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*let clock = setInterval(function (){
    return <h1>{ new Date().toLocaleTimeString() }</h1>
},1000)*/
/*setInterval(function (){
    root.render(
       <h1>{ new Date().toLocaleTimeString() }</h1>
    );
},1000)*/

/*function Box(props) {
    return <h1>My name is: {props.name}</h1>
}*/

root.render(
    // <Box name="Lemon Patwari"/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

reportWebVitals();
