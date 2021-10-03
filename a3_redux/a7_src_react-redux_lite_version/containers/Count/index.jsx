import { connect } from 'react-redux';

import { createIncrementAction } from '../../redux/count_action_creator';

import React, { Component } from 'react';

class CountUI extends Component {
	// 加法
	increment = () => {
		this.props.increment(1);
	};

	render() {
		return (
			<div>
				<h1>當前求和為: {this.props.count}</h1>
				&nbsp;<button onClick={this.increment}>+1</button>
			</div>
		);
	}
}

export default connect(state => ({ count: state }), {
	increment: createIncrementAction
})(CountUI);
