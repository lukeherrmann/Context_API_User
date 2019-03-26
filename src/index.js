import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import UserProvider from "./providers/UserProvider"


ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>
    , document.getElementById('root'));


