import React, { Component } from 'react';
import qs from 'querystring'; // 類似於 JSON 有 stringify 和 parse 方法, 但是是用在 search 上的

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
		const { props: { location: { search } } } = this;
		// 通過 qs.parse 方法將 search 字符串轉成對象, 但是接收到的 search 字符串最前面是一個 '?' , 要先用 slice(1) 方法把問號去掉
		const { id, title } = qs.parse(search.slice(1));
		const matchData = data.find(datum => id === datum.id);
		return (
			<ul>
				<li>{id}</li>
				<li>{title}</li>
				<li>{matchData.content}</li>
			</ul>
		);
	}
}
