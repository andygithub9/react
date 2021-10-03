import { ADD_PERSON } from '../constant';

const initState = []; // 初始化狀態

export default function peopleReducer(preState = initState, action) {
	// 通過解構賦值從 action 動作對象中獲取 type, data
	const { type, data } = action;
	// 根據 type 決定如何加工數據
	switch (type) {
		case ADD_PERSON:
			// reducer 必須是純函數, 甚麼是純函數可以看 README.md 文檔
			// 純函數不得修改參數, 所以 reducer 裡面幾乎不使用 Array 的方法, 包含 Array.push() , Array.unshift() ...等
			// 以下為錯誤示範
			/* 
				preState = preState.push(data) // 此行代碼修改了參數的值, 所以此函數即為不純函數
				return preState
			*/
			return [ data, ...preState ];
		default:
			return preState;
	}
}
