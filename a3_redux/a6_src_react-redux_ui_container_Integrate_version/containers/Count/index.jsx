/* 容器組件是 UI 組件與 redux 通信的橋樑 */

// 引入 react-redux 中的 connet 連接 UI 組件和 redux
import { connect } from 'react-redux';

// 引入 action creators 供 dispatch 調用
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action_creator';

import React, { Component } from 'react';

// react-redux UI組件與容器組件整合版, 直接將 UI 組件寫在容器組件中, 就不必額外在 src/components/ 下開一個文件夾及文件
class CountUI extends Component {
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

export default connect(
	// react-redux 優化版 , 直接在形參裡寫回調, 不另外在外面定義 mapStateToProps
	state => ({ count: state }),
	// react-redux 優化版 , 把原本定義的 mapDispatchToProps 回調改成 {key: action creator} 對象的形式,
	// 'react-redux' 會自動分發 (dispatch) 對象裡的 action ,
	// action creator 本身就是一個函數, 是可以接收參數的, 所以 UI 組件在調用 increment 時,
	// 實際上在調用 count_action_creator.js 裡的 createIncrementAction = data => ({ type: INCREMENT, data });
	// 所以可以傳遞參數進去
	{
		increment: createIncrementAction,
		decrement: createDecrementAction,
		incrementAsync: createIncrementAsyncAction
	}
)(CountUI);
