import React, { Component } from 'react';
import CountContainer from './containers/Count';
import PeopleContainer from './containers/People';

// react-redux 優化版不在 App.jsx 裡面往容器組件標籤傳遞 store 作為 props ,
// 而是改在 index.js 裡面通過 'react-redux' 的 api 傳遞 store
// import store from './redux/store';

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* 
					如果有 100 個容器組件就必須寫 100 次 store={store} , 所以 'react-redux' 對此進行了優化, 
					在 index.js 裡面通過 'react-redux' 的 api 傳遞 store , 就可以讓 App.jsx 中的所有容器組件接收到 store
				 */}
				{/* <CountContainer store={store} /> */}
				<CountContainer />
				<hr />
				<PeopleContainer />
			</div>
		);
	}
}
