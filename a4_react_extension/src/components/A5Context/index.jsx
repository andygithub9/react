import React, { Component } from 'react';
import './index.css';

const UserContext = React.createContext(); // 聲明一個上下文組件

export default function A() {
	const [ userName, setUserName ] = React.useState('Andy');
	const [ age, setAge ] = React.useState(18);

	return (
		<div className='parent'>
			<h3>我是 A 組件</h3>
			<h4>
				我的用戶名是: {userName} , 年齡是: {age}
			</h4>
			{/* 使用上面聲明的上下文組件標籤通過 value 屬性傳遞想傳遞給子孫組件的值 */}
			<UserContext.Provider value={{ userName, age }}>
				<B />
			</UserContext.Provider>
		</div>
	);
}

function B() {
	return (
		<div className='child'>
			<h3>我是 B 組件</h3>
			<C />
		</div>
	);
}

// 函數組件接收 context
function C() {
	return (
		<div className='grand-son'>
			<h3>我是 C 組件</h3>
			<h4>
				我從 A 組件接收到的用戶名是:
				{/* 通過 UserContext.Consumer 接收 UserContext.Provider 傳遞過來的 context 的值 */}
				<UserContext.Consumer>
					{value => (
						<span>
							{value.userName}, 年齡是: {value.age}
						</span>
					)}
				</UserContext.Consumer>
			</h4>
			{/* <h3>我的從 A 拿到的用戶名是: {userName}</h3> */}
		</div>
	);
}

/* 
// 類組件接收 context
class C extends Component {
	// 聲明接收 context
	static contextType = UserContext;

	render() {
		// 組件實例的 this 可以接收到 UserContext.Provider 傳來的 context
		console.log(this);
		console.log(this.context);
		const { userName, age } = this.context;
		return (
			<div className='grand-son'>
				<h3>我是 C 組件</h3>
				<h4>
					我從 A 組件接收到的用戶名是: {userName}, 年齡是: {age}
				</h4>
			</div>
		);
	}
}
 */
