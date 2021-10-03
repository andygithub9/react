import React, { Component, lazy, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

// lazy load
import Loading from './Loading';
const Home = lazy(() => import('./Home')); // 模塊引入 import 支持函數調用的寫法
const About = lazy(() => import('./About'));

/* 
直接使用 lazy 函數會報錯
	Error: A React component suspended while rendering, but no fallback UI was specified.
	錯誤: 渲染時有一個 React 組件是不確定的, 但是沒有指定後備(備用) 的 UI 組件
	Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.
	再節點的樹狀結構外層增加一個 <Suspense fallback=...> 組件, 用來作為 loading 或 placeholder 的展示

結論:
	當你的組件通過 lazy 函數變為懶加載模式時, 你一進到畫面還不確定要加載哪個組件, 所以要展示一個預設的組件, 
	要展示預設組件就必須在懶加載的組件外面包一個 <Suspense fallback={Xxx}> 組件

觀察 Suspense 組件有沒有運行
	開啟 chrome 的 DevTools 選擇 Network 卡片, 勾選 Disable cache 停用快取 , 在 http://localhost:3000/ 重新刷新頁面後, 
	將網速調成 Slow3G 後點擊 About 或 Home 鏈接, 就會看到 <Suspense fallback={<Loading />}> 預設的 Loading 組件, 
	Suspense 組件的 fallback 屬性值中的組件不可以是懶加載, 他必須跟一開始的畫面一起加載, 
	因為它的作用在於當 User 點擊 About 鏈接因為網速過慢看不到 About 組件時, 先渲染 fallback 指定的組件給你看, 例如: laoding 畫面的組件, 
	等 About 加載完在渲染 About 組件
	
	你會發現點擊 About 鏈接會下載 0.chunk.js 點擊 Home 鏈接會下載 1.chunk.js , 就是因為我們開啟了懶加載模式, 只有組件需要被用到時才會加載
*/

export default class App extends Component {
	// 更新 state
	updateAppState = stateObj => this.setState(stateObj);

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-xs-offset-2 col-xs-8'>
						<div className='page-header'>
							<h2>React Router Demo</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-xs-2 col-xs-offset-2'>
						<div className='list-group'>
							{/* 在 React 中靠路由鏈接實現切換組件 - 編寫路由鏈接 */}
							<Link className='list-group-item' to='/about'>
								About
							</Link>
							<Link className='list-group-item' to='/home'>
								Home
							</Link>
						</div>
					</div>
					<div className='col-xs-6'>
						<div className='panel'>
							<div className='panel-body'>
								{/* 註冊路由 */}
								<Suspense fallback={<Loading />}>
									<Route path='/about' component={About} />
									<Route path='/home' component={Home} />
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
