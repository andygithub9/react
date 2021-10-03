/* 
  1. 該文件用於創建一個為 Count 服務的 reducer , reducer 本質上是一個函數
  2. reducer 函數會接到兩個參數, 1. 之前的狀態 2. 動作對象
  3. reducer 接到的第二個參數為動作對象, 動作對象有兩個屬性: 1. type 動作類型 2. data 數據
  4. reducer 是一個純函數, 不處理業務邏輯, 例如: 如果奇數才能相加的判斷應該在 reducer 之前處理好, 先判斷是不是奇數再決定要不要調用 reducer
*/

import { INCREMENT, DECREMENT } from '../constant';

const initState = 0; // 初始化狀態

// 第一次調用 store.getState() 會自動 dispatch 初始化動作對象(action) {type: "@@redux/INIT(亂碼)", data: undefined } ,
// 此時 preState 是 undefined , 通過形參默認值語法將 initState 賦值給 preState 形參, 再通過 switch 中的 default 返回作為初始值
// 形參默認值語法: function myFunc(形參=默認值){};
export default function countReducer(preState = initState, action) {
	// 通過解構賦值從 action 動作對象中獲取 type, data
	const { type, data } = action;

	// 根據 type 決定如何加工數據
	switch (type) {
		case INCREMENT: // 如果 type 是 'increment'
			// 一般情況 switch/case 會搭配 break 避免往下重複匹配, 但是 return 會中斷整個函數就不用再寫 brake 了
			return preState + +data;
		case DECREMENT: // 如果 type 是 'decrement'
			return preState - +data;
		// 不匹配上面的 type 直接返回之前的狀態 preState
		default:
			return preState;
	}
}
