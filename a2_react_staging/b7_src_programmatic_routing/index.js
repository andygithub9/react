import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  // 注意: 有用到 'react-router-dom' 的 API 組件最外層一定要包 <BrowserRouter> 或 <HashRouter> 標籤,
  //        因為我們寫的是 SPA 單頁應用所以建議直接包在 src/index.js 最上層的 App 組件外面
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
