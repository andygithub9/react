import { ADD_PERSON } from '../constant';

const initState = []; // 初始化狀態

export default function peopleReducer(preState = initState, action) {
	// 通過解構賦值從 action 動作對象中獲取 type, data
	const { type, data } = action;
	// 根據 type 決定如何加工數據
	switch (type) {
		case ADD_PERSON:
			return [ data, ...preState ];
		default:
			return preState;
	}
}
