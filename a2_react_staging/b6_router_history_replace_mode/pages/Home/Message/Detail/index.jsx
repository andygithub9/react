import React, { Component } from 'react';
// import qs from 'querystring'; // 類似於 JSON 有 stringify 和 parse 方法, 但是是用在 search 上的

const data = [
	{ id: '01', content: '我是消息一的內容' },
	{ id: '02', content: '我是消息二的內容' },
	{ id: '03', content: '我是消息三的內容' }
];

export default class Detail extends Component {
	render() {
		// 接收路由傳遞過來的 params
		// const { props: { match: { params: { id, title } } } } = this;

		// 接收路由傳遞過來的 search
		// const { props: { location: { search } } } = this;
		// 通過 qs.parse 方法將 search 字符串轉成對象, 但是接收到的 search 字符串最前面是一個 '?' , 要先用 slice(1) 方法把問號去掉
		// const { id, title } = qs.parse(search.slice(1));

		// 接收路由傳遞過來的 state
		// 直接用無痕視窗開啟 http://localhost:3000/home/message/detail 會發現頁面報錯, 因為路由的 state 是放在緩存中的 history 裡面維護的,
		// 但是無痕視窗並沒有緩存也就沒辦法維護 state , state 會是 undefined , 就會報錯: Cannot read properties of undefined,
		// 所以要寫判斷式, 如果 state 是 undefined 就就賦給他一個空對象
		const { id, title } = this.props.location.state || {};
		// 如果 state 是空對象則 state.id 為 undefined , 所以要寫判斷式, 如果 state.id 為 undefined 就就賦給 matchData 一個空對象
		const matchData = data.find(datum => id === datum.id) || {};
		return (
			<ul>
				<li>{id}</li>
				<li>{title}</li>
				<li>{matchData.content}</li>
			</ul>
		);
	}
}
