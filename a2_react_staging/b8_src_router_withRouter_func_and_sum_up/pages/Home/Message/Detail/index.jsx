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
		// const matchData = data.find(datum => id === datum.id);

		// 接收路由傳遞過來的 search
		// const { props: { location: { search } } } = this;
		// const { id, title } = qs.parse(search.slice(1));
		// const matchData = data.find(datum => id === datum.id);

		// 接收路由傳遞過來的 state
		const { id, title } = this.props.location.state || {};
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
