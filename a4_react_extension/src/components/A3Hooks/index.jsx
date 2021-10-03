import React from 'react';
import ReactDOM from 'react-dom';
export default function A3Hooks() {
	/* 
State Hook
	1. state Hook 函數組件也可以有 state 狀態, 並進行狀態數據的讀寫操作
	2. 語法: `const[xxx, setXxx] = React.useState(initValue)` , 通過數組的解構賦值取得 React.useState 返回的狀態和更新狀態的函數
	3. useState()說明:
		- 參數: 第一次初始化指定的值在內部作緩存
		- 返回值: 包含2個元素的數組, 第1個為內部當前狀態值, 第2個為更新狀態值的函數
	4. setXxx() 的2種寫法:  
		1. setXxx(newValue): 參數為非函數值, 直接指定新的狀態值, 內部用其覆蓋原來的狀態值
		2. setXxx(value => newValue): 參數為函數, 接收原本的狀態值, 返回新的狀態值, 內部用其覆蓋原來的狀態值
*/
	const [ count, setCount ] = React.useState(0); // 通過數組的解構賦值取得 React.useState 返回的狀態和更新狀態的函數
	const [ name, setName ] = React.useState('Andy'); // 通過數組的解構賦值取得 React.useState 返回的狀態和更新狀態的函數

	// 點擊 +1 的回調
	function add() {
		// setCount(count + 1); // 第一種寫法, 參數為要更新狀態的值
		setCount(oldCount => oldCount + 1); // 第二種寫法, 參數為回調函數, 此回調可以拿到舊的狀態值, 並返回一個值作為新狀態
	}

	// 點擊改名的回調
	function changeName() {
		setName(oldName => oldName + 'y');
	}

	/* 
Effect Hook
1. EffectHook 可以讓你在函數組件中行副作用操作(用於模擬類組件中的生命週期鉤子)
2. React 中的副作用操作:
  1. 發 ajax 請求數據獲取
  2. 設置訂閱 啟動定時器
  3. 手動更改真實DOM
3. 語法和說明:
    ```js
    useEffect(() => {
        //在此可以執行任何帶副作用操作
        return () => { //在件卸載前執行
            // 在此做一些收尾工作, 比如清除定時器/取消訂閱等
        }
    },[stateValue]) // 如果指定的是[], 回調函數只會在第一次 render() 後執行
    ```
4. 可以把 useffectHook 看做如下三個數的組合
  - componentDidMount ()
  - componentDidupdate()
  - componentwill Unmount()
*/

	React.useEffect(
		() => {
			// useEffect 的第一個參數是一個回調函數, 會執行 1 + n 次, 1 是組件已經被掛載時也就是 componentDidMount,
			// n 是 useEffect 的第二個參數監聽的狀態被更新時也會調用 useEffect 的第一個參數
			console.log(`React.useEffect 的第一個函數類型的參數被調用了`);
			let timer = setInterval(() => {
				setCount(oldCount => oldCount + 1);
			}, 1000);

			return () => clearInterval(timer); // useEffect 的第一個參數可以返回一個函數, 這個函數就相當於 componentWillUnmount, 會在組件卸載前執行
		},
		// 監聽 name 狀態, name 被更新時會調用 useEffect 的第一個參數, 所以點擊 '點我改名' 的按鈕會輸出上面的 `React.useEffect 的第一個函數類型的參數被調用了`
		[ name ] // useEffect 的第二個參數是一個數組, 用於指定要監聽的狀態, 當監聽的狀態更新就會調用 useEffect 的第一個參數
	);

	// 點擊卸載組件的回調
	function unmountComponent() {
		ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	}

	/* 
Ref Hook
	1. Ref Hook 可以在函數組件中存儲/查找組件內的標籤或任意其它數據
	2. 語法: const refContainer = React.useRef()
	3. 作用: 保存標籤對象, 功能與 React.createRef() 一樣
*/

	// 定義一個 ref 容器用來存儲節點
	const myRef = React.useRef();

	// 點擊顯示輸入框的值的回調
	function showInputVal() {
		alert(myRef.current.value);
	}

	return (
		<div>
			<h2>當前求和為: {count}</h2>
			<button onClick={add}>點擊+1</button>
			<h2>我的名字是: {name}</h2>
			<button onClick={changeName}>點我改名</button>
			<br />
			<br />
			<button onClick={unmountComponent}>卸載此組件</button>
			<br />
			<br />
			{/* ref={myRef} 將此 input 節點存放到上面通過 React.useRef() 定義的 myRef 節點容器中  */}
			<input ref={myRef} type='text' name='' id='' />&nbsp;&nbsp;
			<button onClick={showInputVal}>顯示輸入框的值</button>
		</div>
	);
}
