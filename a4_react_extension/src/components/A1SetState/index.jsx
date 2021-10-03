import React, { Component } from 'react';

export default class A1setState extends Component {
	/* 
  1. setState 更新狀態的 2 種寫法
    1. setState(stateChange, [callback]) - 對象式的 setState
      1. stateChange 為狀態改變對象(該對象可以體現出狀態的更改)
      2. callback 是可選的回調數, 它在狀態更新完畢, 界面也更新後(render調用後)才被調用
  2. setState(updater, [callback]) - 函數式的setState
      1. updater 為返回 statechange 對象的函數。
      2. updater 可以接收到 state 和 props。
      3. callback是可選的回調函數, 它在狀態更新, 界面也更新後(render調用後)才被調用。

  總結:
    1. 對象式的 setState 是函數式的 setState 的簡寫方式(語法糖)
    2. 使用原則:
      1. 如果新狀態不依賴於原狀態 -> 使用對象方式
      2. 如果新狀態依賴於原狀態 -> 使用函數方式
      3. 如果需要在 setState  執行後獲取最新的狀態數據, 要在第二個 callback 函數中讀取
  */

	state = { count: 0 };

	add = () => {
		// react 的 setState 是異步更新, 會在 onClick 的回調結束之後才調用 render , 所以在點擊的回調中獲取的狀態是 render 前的狀態

		// 對象式的 setState
		// this.setState(
		// 	{ count: this.state.count + 1 },
		// 	() => console.log(`setState 的第二個回調函數參數獲取的 state: `, this.state.count) // setState 的第二個回調函數參數 render 調用後才被調用, 獲取的是新狀態
		// );

		// 點擊的回調在 render 調用前被調用, 獲取的是舊狀態
		console.log(`onClick 的回調的 state: `, this.state.count);

		// 函數式的 setState
		this.setState(
			(state, props) => ({ count: state.count + 1 }), // 函數式的 setState 可以獲取父組件傳遞的 props
			() => console.log(`setState 的第二個回調函數參數獲取的 state: `, this.state.count) // setState 的第二個回調函數參數 render 調用後才被調用, 獲取的是新狀態
		);
	};
	render() {
		return (
			<div>
				<h2>當前求和為: {this.state.count}</h2>
				<button onClick={this.add}>點我+1</button>
			</div>
		);
	}
}
