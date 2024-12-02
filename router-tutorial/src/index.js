import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 2024-12-02 React Router Component 연습 코드
// React Router 사용으로 인한 주석처리
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // 2024-12-02 React Router 사용
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // React Router 사용으로 인한 주석처리
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);