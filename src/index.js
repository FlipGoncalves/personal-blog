import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/aboutme/aboutme';
import Texts from './pages/texts/texts';
import Posts from './pages/posts/posts';
import Lifestyle from './pages/lifestyle/lifestyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ < App /> }></Route>
        <Route exact path='/blog' element={< Texts />}></Route>
        <Route exact path='/me' element={< AboutMe />}></Route>
        <Route exact path='/post' element={< Posts />}></Route>
        <Route exact path='/life' element={< Lifestyle />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
