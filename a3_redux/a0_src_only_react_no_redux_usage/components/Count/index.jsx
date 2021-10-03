import React, { Component } from 'react';

export default class index extends Component {
	state = { count: 0 };

	increment = () => {
		const { selectNum: { value }, state: { count } } = this;
		this.setState({ count: count + +value });
	};

	decrement = () => {
		const { selectNum: { value }, state: { count } } = this;
		this.setState({ count: count - +value });
	};

	incrementIfOdd = () => {
		const { selectNum: { value }, state: { count } } = this;
		// (count & 1) === 1 判斷是不是奇數
		if ((count & 1) === 1) this.setState({ count: count + +value });
	};

	incrementAsync = () => {
		const { selectNum: { value }, state: { count } } = this;
		setTimeout(() => {
			this.setState({ count: count + +value });
		}, 500);
	};

	render() {
		const { state: { count } } = this;
		return (
			<div>
				<h1>當前求和為: {count}</h1>
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
