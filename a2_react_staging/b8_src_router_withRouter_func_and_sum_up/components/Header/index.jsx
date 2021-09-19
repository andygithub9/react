import React, { Component } from 'react';
// 一般組件與路由組件的差異在於能接收到路由傳遞過來的三個固定的屬性 history、 location、 match ,
// 一般組件沒有接收到這三個屬性就沒辦法操作 history , 這時需要借助 react-router-dom 庫中的 withRouter 函數(通常小寫開頭是函數大寫開頭是組件),
// 通過 withRouter 函數加工後返回的新組件就能接收到路由傳遞過來的三個屬性
import { withRouter } from 'react-router-dom';

class Header extends Component {
	// goDemo 按鈕的回調, 跳轉到參數指定頁, 正數為下 X 頁, 負數為上 X 頁
	goDemo = () => {
		console.log(this.props);
		this.props.history.go(-2);
	};

	// goBackDemo 按鈕的回調, 跳轉到上一頁
	goBackDemo = () => {
		console.log(this.props);
		this.props.history.goBack();
	};

	// goForwardDemo 按鈕的回調, 跳轉到下一頁
	goForwardDemo = () => {
		console.log(this.props);
		this.props.history.goForward();
	};

	render() {
		return (
			<div className='page-header'>
				<h2>React Router Demo</h2>
				<h3>通過 'react-router-dom' 庫中的 withRouter 函數將一般組件加工為路由組件</h3>
				<button onClick={this.goDemo}>go(-2)Demo</button>
				<button onClick={this.goBackDemo}>goBackDemo</button>
				<button onClick={this.goForwardDemo}>goForwardDemo</button>
			</div>
		);
	}
}

// 通過 withRouter 函數加工後返回的新組件就能接收到路由傳遞過來的三個屬性, 再向外暴露 withRouter 函數返回的新組件
export default withRouter(Header);
