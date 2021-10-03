// react-redux 最終版, 將每個 reducer 的合併的動作移至 src/redux/reducers/index.js
import countReducer from './count_reducer';
import peopleReducer from './people_reducer';
// 通過 'redux' 的 combineReducers 將 countReducer, peopleReducer 合併起來
import { combineReducers } from 'redux';
// 將合併好的 reducer 輸出到 src/redux/store.js
export default combineReducers({
	countReducer,
	peopleReducer
});
