import React, { Component } from 'react';

export default class Count extends Component {
	// 加法
	increment = () => {
		const { selectNum: { value } } = this;
		// 容器組件會通過 props 傳遞 store 進來, 其中有我們在容器組件定義好通過 dipatch(action) 更新 store 狀態的函數,
		// 調用就能修改 store 裡的 state
		this.props.increment(value);
	};

	// 減法
	decrement = () => {
		const { selectNum: { value } } = this;
		this.props.decrement(value);
	};

	// 奇數再加
	incrementIfOdd = () => {
		const { selectNum: { value } } = this;
		if ((this.props.count & 1) === 1) this.props.increment(value);
	};

	// 異步加
	incrementAsync = () => {
		const { selectNum: { value } } = this;
		this.props.incrementAsync(value, 1000);
	};

	render() {
		console.log(`this.props : `, this.props);
		return (
			<div>
				<h1>當前求和為: {this.props.count}</h1>
				<select ref={node => (this.selectNum = node)}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				&nbsp;<button onClick={this.increment}>+</button>
				&nbsp;<button onClick={this.decrement}>-</button>
				&nbsp;<button onClick={this.incrementIfOdd}>當前求和為奇數才可以加</button>
				&nbsp;<button onClick={this.incrementAsync}>異步加(1s後加)</button>
			</div>
		);
	}
}
