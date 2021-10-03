import React from 'react';
// import A1SetState from '../A1SetState';
import './index.css';

export default function Parent() {
	return (
		<div className='parent'>
			<h3>我是 Parent 組件</h3>
			<Child myRender={name => <GrandSon name={name} />} />
			{/* 可以自定義要返回甚麼組件, 並將此組件放到 Child 的插槽中 */}
			{/* <Child myRender={name => <A1SetState name={name} />} /> */}
		</div>
	);
}
function Child(props) {
	const [ name, setName ] = React.useState('Andy');

	return (
		<div className='child'>
			<h3>我是 Child 組件</h3>
			{/* 
				通過 props.myRender() 調用 Parent 組件中的 Child 組件標籤中的 myRender 屬性, myRender 屬性值為一個函數, 
				此函數的返回值為一個 jsx 對象(組件標籤), 在調用 props.myRender 函數時可以傳遞參數, 再將參數傳給此函數返回的組件標籤的 props 
			*/}
			{/* 這邊有點像 vue 中的 slot 預留插槽, Parent 組件中的 Child 組件標籤可以自定義屬性跟屬性值函數要返回的組件 */}
			{props.myRender(name)}
		</div>
	);
}
function GrandSon(props) {
	return (
		<div className='grand-son'>
			<h3>我是 GrandSon 組件</h3>
			<h4>我的名字是: {props.name}</h4>
		</div>
	);
}
