/* 
  該文件專門為 Count 組件生成 action 對象
*/

import { INCREMENT, DECREMENT } from './constant';

export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });
export const createIncrementAsyncAction = (data, timeout) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(createIncrementAction(data));
		}, timeout);
	};
};
