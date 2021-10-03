import React, { Component } from 'react';
import store from '../../redux/store';
import { createIncrementAction, createDecrementAction } from '../../redux/count_action_creator';

export default class Count extends Component {
	// 雖然偵測 redux 中的狀態改變可以寫在組件 componentDidMount 裡面, 但是這樣的話代表每個組件都寫一次,
	// 有一個一勞永逸的解決辦法, 可以在 index.js 裡面監測 redex 中的狀態改變, 就不必在每個組件都寫一次 store.subscribe
	/* componentDidMount() {
		// redux 中的狀態改變並不會引起頁面重新渲染, 因為 redux 不是 FB 寫的, redux 是獨立的第三方庫
		// store.subscribe(回調函數) 函數, 用來監測 redux 中狀態的變化, 只要一變化就調用 render
		store.subscribe(() => {
			// this.render() // 這是錯誤的寫法, react 不允許這樣的寫法, 如果要重新 render 要通過 this.setState({}) , 代表不更新狀態但是要調用 render
			// this.setState() 會做兩件事, 1. 更新狀態 2. 調用 render
			this.setState({}); // 通過 this.setState({}) 不更新狀態, 只調用 render
		});
	} */

	// 加法
	increment = () => {
		const { selectNum: { value } } = this;
		// 通知 redux 加 value
		store.dispatch(createIncrementAction(+value));
	};

	// 減法
	decrement = () => {
		const { selectNum: { value } } = this;
		store.dispatch(createDecrementAction(+value));
	};

	// 奇數再加
	incrementIfOdd = () => {
		const { selectNum: { value } } = this;
		// (store.getStore() & 1) === 1 判斷是不是奇數
		if ((store.getState() & 1) === 1) store.dispatch(createIncrementAction(+value));
	};

	// 異步加
	incrementAsync = () => {
		const { selectNum: { value } } = this;
		setTimeout(() => {
			store.dispatch(createIncrementAction(+value));
		}, 500);
	};

	render() {
		return (
			<div>
				{/* 第一次調用 store.getState() 會自動 dispatch 初始化動作對象(action) {type: "@@redux/INIT(亂碼)", data: undefined } 給 reducer */}
				<h1>當前求和為: {store.getState()}</h1>
				<select ref={node => (this.selectNum = node)}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				&nbsp;<button onClick={this.increment}>+</button>
				&nbsp;<button onClick={this.decrement}>-</button>
				&nbsp;<button onClick={this.incrementIfOdd}>當前求和為奇數才可以加</button>
				&nbsp;<button onClick={this.incrementAsync}>異步加(500ms後加)</button>
			</div>
		);
	}
}
