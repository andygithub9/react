import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
	state = { hasError: false }; // 用於標識子組件是否產生錯誤

	// 從錯誤中獲取派生狀態
	// 當 Parent 的子組件報錯的時候, 會觸發 getDerivedStateFromError 的調用, 並攜帶錯誤信息
	static getDerivedStateFromError(error) {
		return { hasError: error };
	}

	componentDidCatch() {
		console.log('此處已捕獲子組件的錯誤, 可以反饋給服務器端, 用於通知編碼人員進行 bug 的解決');
	}

	render() {
		return (
			<div>
				<h2>我是 Parent 組件</h2>
				{/* 
					注意: 在開發環境中 <h2>後代組件報錯</h2> 會閃一下之後跳出錯誤訊息, 因為還是要讓前端開發人員看到真實的錯誤訊息, 
							但是在生產環境中(yarn build 打包過後), 就會顯示 <h2>後代組件報錯</h2> 不跳錯誤訊息畫面, 避免整個應用崩潰和讓使用者看到錯誤訊息
				 */}
				{this.state.hasError ? <h2>後代組件報錯</h2> : <Child />}
			</div>
		);
	}
}
