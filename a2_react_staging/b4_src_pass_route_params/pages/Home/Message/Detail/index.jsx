import React, { Component } from 'react';

const data = [
	{ id: '01', content: '我是消息一的內容' },
	{ id: '02', content: '我是消息二的內容' },
	{ id: '03', content: '我是消息三的內容' }
];

export default class Detail extends Component {
	// 接收路由傳遞過來的 params
	render() {
		const { props: { match: { params: { id, title } } } } = this;
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
