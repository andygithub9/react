import React, { Component } from 'react';

export default class Child extends Component {
	// 原本預期後端傳來的是一個數組

	// state = {
	// 	users : [ { id: '001', name: 'Andy', age: 18 }, { id: '002', name: 'Bob', age: 19 } ]
	// };

	// 但是傳來的卻是一個字符串就會報錯 TypeError: this.state.users.map is not a function
	// 要如何從捕獲這個錯誤讓整個應用不至於因為一個小錯誤而崩潰?
	// 使用錯誤邊界(Error boundary): 用來捕穫後代組件錯誤, 渲染出備用頁面
	// 只能捕穫後代組件生命週期產生的錯誤, 不能捕獲自己組件產生的錯誤,
	// 所以要到父組件用錯誤邊界組件來捕獲 render 裡面的錯誤

	state = { users: 'abc' };

	render() {
		return (
			<div>
				<h2>我是 Child 組件</h2>
				{this.state.users.map(user => (
					<h4 key={user.id}>
						我是{user.name}, 今年 {user.age} 歲
					</h4>
				))}
			</div>
		);
	}
}
