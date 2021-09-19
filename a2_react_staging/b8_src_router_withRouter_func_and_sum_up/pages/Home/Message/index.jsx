import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
	state = {
		messageArr: [ { id: '01', title: '消息一' }, { id: '02', title: '消息二' }, { id: '03', title: '消息三' } ]
	};

	// 通過路由的 api 函數傳遞 params 參數
	// pushDemo = (id, title) => this.props.history.push(`/home/message/detail/${id}/${title}`);
	// replaceDemo = (id, title) => this.props.history.replace(`/home/message/detail/${id}/${title}`);

	// 通過路由的 api 函數傳遞 search 參數
	// pushDemo = (id, title) => this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
	// replaceDemo = (id, title) => this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

	// 通過路由的 api 函數傳遞 state 參數
	pushDemo = (id, title) => this.props.history.push(`/home/message/detail`, { id, title });
	replaceDemo = (id, title) => this.props.history.replace(`/home/message/detail`, { id, title });
	// goDemo 按鈕的回調, 跳轉到參數指定頁, 正數為下 X 頁, 負數為上 X 頁
	goDemo = () => this.props.history.go(-2);
	// goBackDemo 按鈕的回調, 跳轉到上一頁
	goBackDemo = () => this.props.history.goBack();
	// goForwardDemo 按鈕的回調, 跳轉到下一頁
	goForwardDemo = () => this.props.history.goForward();

	render() {
		const { state: { messageArr } } = this;
		return (
			<div>
				<ul>
					{messageArr.map(message => {
						return (
							<li key={message.id}>
								{/* 向路由傳遞 params 參數, 路由/參數/參數 */}
								{/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}
								{/* ====================================================================================================== */}
								{/* 向路由傳遞 search 參數, 路由?參數&參數 */}
								{/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>
									{message.title}
								</Link> */}
								{/* ====================================================================================================== */}
								{/* 向路由傳遞 state 參數, to={{pathname: '路由',state: {傳遞的數據}}} */}
								{/* 在路由鏈接加上 replace 屬性, 會將路由導航的麼是改為替代模式, replace 下的路由鏈結不會在 this.props.history 下留下紀錄 */}
								{/* ====================================================================================================== */}
								<Link
									to={{
										pathname: '/home/message/detail',
										state: { id: message.id, title: message.title }
									}}
								>
									{message.title}
								</Link>
								&nbsp;<button onClick={() => this.pushDemo(message.id, message.title)}>push 查看</button>
								&nbsp;<button onClick={() => this.replaceDemo(message.id, message.title)}>
									replace 查看
								</button>
							</li>
						);
					})}
				</ul>
				<hr />
				{/* 聲明接收 params 參數, 路由/:參數/:參數, 在傳遞給路由對應的組件 */}
				{/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

				{/* search 參數不需要聲明接收 */}
				{/* <Route path='/home/message/detail' component={Detail} /> */}

				{/* state 參數不需要聲明接收 */}
				<Route path='/home/message/detail' component={Detail} />
				<button onClick={this.goDemo}>go(-2)Demo</button>
				<button onClick={this.goBackDemo}>goBackDemo</button>
				<button onClick={this.goForwardDemo}>goForwardDemo</button>
			</div>
		);
	}
}
