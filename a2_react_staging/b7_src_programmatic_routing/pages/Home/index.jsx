import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { Route, Switch, Redirect } from 'react-router-dom';
import News from './News';
import Message from './Message';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是 Home 的內容</h3>
				<div>
					<ul className='nav nav-tabs'>
						<li>
							{/* 在路由鏈接加上 replace 屬性, 會將路由導航的麼是改為替代模式, replace 下的路由鏈結不會在 this.props.history 下留下紀錄 */}
							<MyNavLink className='list-group-item' to='/home/news'>
								News
							</MyNavLink>
						</li>
						<li>
							<MyNavLink className='list-group-item' to='/home/message'>
								Message
							</MyNavLink>
						</li>
					</ul>
					{/* 註冊路由 */}
					{/* 匹配路由的流程, 以二級路由鏈接 '/home/news' 為例,
              在第一層路由時路由鏈接為 '/home/news' 匹配到路由 '/home' ,
              接著在繼續往下一層匹配在第二層路由時路由鏈接為 '/home/news' 匹配到路由 '/home/news' ,
              注意: 所以在路由加上 exact 屬性的話只會匹配到該層路由就不接下去匹配下一層
          */}
					<Switch>
						<Route path='/home/news' component={News} />
						<Route path='/home/message' component={Message} />
						<Redirect to='/home/news' />
					</Switch>
				</div>
			</div>
		);
	}
}
