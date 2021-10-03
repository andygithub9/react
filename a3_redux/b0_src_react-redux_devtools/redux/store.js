/* 該文件專門用於暴露一個 store 對象, 整個應用只有一個 store 對象 */

// 引入 createStore , 用於創建 redux 中的核心之一 store 對象
// 使用中間件時需要 applyMiddleware 這個 api
import { createStore, applyMiddleware } from 'redux';

// 引入為 Count 組件服務的 reducer
import countReducer from './reducers/count_reducer';

// 引入為 People 組件服務的 reducer
import peopleReducer from './reducers/people_reducer';

// 使用 'redux-thunk' 中間件 dispatching 異步 actions
import thunk from 'redux-thunk';

// 要使用 chrome 的 redux 擴充功能必須先安裝 'redux-devtools-extension' 並引入 composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';

// 默認暴露 store
/* 
  錯誤的寫法, 直接傳遞多個 reducer 給 createStore 會報錯
  export default createStore(countReducer, peopleReducer, applyMiddleware(thunk));

  Error: It looks like you are passing several store enhancers to createStore().
  This is not supported. Instead, compose them together to a single function.
  See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.
  報錯: 看起來你傳遞多個 reducer 給 createStore(). 這是不合法的. 你應該將多個 reducer 組合在一起
  compose 有組成、 撰寫的意思
*/
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
	countReducer,
	peopleReducer
});

/* 
  在 chrome 的 devtool 裡面使用 redux 擴充功能必須使用 'redux-devtools-extension' 第三方庫的 composeWithDevTools 方法
  composeWithDevTools 的用法
  createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
*/
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
