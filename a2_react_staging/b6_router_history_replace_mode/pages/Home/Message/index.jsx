import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
	state = {
		messageArr: [ { id: '01', title: '消息一' }, { id: '02', title: '消息二' }, { id: '03', title: '消息三' } ]
	};

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

								{/* 向路由傳遞 search 參數, 路由?參數&參數 */}
								{/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>
									{message.title}
								</Link> */}

								{/* 向路由傳遞 state 參數, to={{pathname: '路由',state: {傳遞的數據}}} */}
								{/* 在路由鏈接加上 replace 屬性, 會將路由導航的麼是改為替代模式, replace 下的路由鏈結不會在 this.props.history 下留下紀錄 */}
								<Link
									replace
									to={{
										pathname: '/home/message/detail',
										state: { id: message.id, title: message.title }
									}}
								>
									{message.title}
								</Link>
							</li>
						);
					})}
				</ul>
				<hr />
				{/* 聲明接收 params 參數, 路由/:參數/:參數, 在傳遞給路由對應的組件 */}
				{/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

				{/* search 參數不需要聲明接收 */}
				{/* <Route path="/home/message/detail" component={Detail} /> */}

				{/* state 參數不需要聲明接收 */}
				<Route path='/home/message/detail' component={Detail} />
			</div>
		);
	}
}
