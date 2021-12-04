import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'
import './styles/Styles.css'
import reportWebVitals from './reportWebVitals';

console.log(React);
console.log(useState);

const newDiv = document.createElement("div");
newDiv.setAttribute('id','root');
document.body.appendChild(newDiv);

ReactDOM.render(    
<React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
