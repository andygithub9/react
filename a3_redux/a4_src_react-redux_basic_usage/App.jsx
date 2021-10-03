import React, { Component } from 'react';
// import Count from './components/Count';
import CountContainer from './containers/Count';

/* 引入 store 會自動 dispatch 初始化動作對象(action) { type: "@@redux/INIT(亂碼)", data: undefined } 給 reducer 並得到返回的初始值 */
import store from './redux/store';

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<CountContainer store={store} />
			</div>
		);
	}
}
