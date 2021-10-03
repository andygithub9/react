/* 該文件專門用於暴露一個 store 對象, 整個應用只有一個 store 對象 */

// 引入 createStore , 用於創建 redux 中的核心之一 store 對象
// 使用中間件時需要 applyMiddleware 這個 api
import { createStore, applyMiddleware } from 'redux';

// 使用 'redux-thunk' 中間件 dispatching 異步 actions
import thunk from 'redux-thunk';

// 要使用 chrome 的 redux 擴充功能必須先安裝 'redux-devtools-extension' 並引入 composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';

/* 
// 引入為 Count 組件服務的 reducer
import countReducer from './reducers/count_reducer';

// 引入為 People 組件服務的 reducer
import peopleReducer from './reducers/people_reducer';

// 報錯: 看起來你傳遞多個 reducer 給 createStore(). 這是不合法的. 你應該將多個 reducer 組合在一起
// 通過 'redux' 的 combineReducers 將 countReducer, peopleReducer 合併起來
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	countReducer,
	peopleReducer
});
*/

// reacr-redux 最終版
// 在 src/redux/reducers/index.js 把所有 reducer 合併在引入到 store 中
import rootReducer from './reducers';
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
