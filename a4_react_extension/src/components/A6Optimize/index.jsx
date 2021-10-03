import React, { Component, PureComponent } from 'react';
import './index.css';

/* 
Component 的 2 個問題
	1. 只要執行 setState() , 即使不改變狀態數據, 組件也會重新 render() -> 效率低
	2. 只當前組件重新 render() , 就會自動重新 render 子組件 -> 效率低

解決
	辦法 1 :
		重寫 shouldComponentUpdate() 方法
		比較新舊 state 或 props 數據, 如果有變化才返回 true , 如果沒有回 false
	辦法 2 :
		使用 PureComponent
		PureComponent 重寫了 shouldComponentUpdate() , 只有 state 或 props 數據有變化才返回 true
 */

// 辦法 2 : 使用 PureComponent
export default class Parent extends PureComponent {
	state = { carName: 'Audi' };

	changeCar = () => {
		this.setState({ carName: 'Benz' });
	};

	/* 
	// 辦法 1 :
	// 重寫 shouldComponentUpdate() 方法
	// 比較新舊 state 或 props 數據, 如果有變化才返回 true , 如果沒有回 false
	shouldComponentUpdate(nextProps, nextState) {
		// console.log(this.props, this.state);
		// console.log(nextProps, nextState);
		return !(this.state.carName === nextState.carName); // 判斷狀態 carName 更新的值和原狀態不同才更新組件
	}
 */

	render() {
		console.log(`Parent -> render`);

		return (
			<div className='parent'>
				<h3>我是 Parent 組件</h3>
				<h4>我的車子品牌是: {this.state.carName}</h4>
				<button onClick={this.changeCar}>換車</button>
				<br />
				<br />
				<Child carName={this.state.carName} />
			</div>
		);
	}
}

// 辦法 2 : 使用 PureComponent
class Child extends PureComponent {
	/* 	
	// 辦法 1 :
	// 重寫 shouldComponentUpdate() 方法
	// 比較新舊 state 或 props 數據, 如果有變化才返回 true , 如果沒有回 false
	shouldComponentUpdate(nextProps, nextState) {
		// console.log(this.props, this.state);
		// console.log(nextProps, nextState);
		return !(this.props.carName === nextProps.carName); // 判斷 props.carName 更新的值和原 props.carName 不同才更新組件
	}
 */

	render() {
		console.log(`Child -> render`);
		return (
			<div className='child'>
				<h3>我是 Child 組件</h3>
				<h4>我從 Parent 組件接收到的車子品牌是: {this.props.carName}</h4>
			</div>
		);
	}
}
