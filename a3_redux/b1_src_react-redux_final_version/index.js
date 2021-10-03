import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// react-redux 優化版使用 'react-redux' 提供 Provider api 組件可以讓所有子容器組件接收到 store ,
// 並監測 redux 狀態的變化, 有變化就重新渲染 App
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
	// 此處需要用 Provider 包裹 App, 目的是讓 App 所有的後代容器組件都能接收 store
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

// react-redux 優化版不需要用 store.subscribe 監測 redux 狀態的變化
// store.subscribe(() => {
// 	ReactDOM.render(
// 		<React.StrictMode>
// 			<App />
// 		</React.StrictMode>,
// 		document.getElementById('root')
// 	);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
