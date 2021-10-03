/* 容器組件是 UI 組件與 redux 通信的橋樑 */

// 引入 Count 的 UI 組件
import CountUI from '../../components/Count';

// 引入 react-redux 中的 connet 連接 UI 組件和 redux
import { connect } from 'react-redux';

// 引入 action creators 供 dispatch 調用
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action_creator';

// const mapStateToProps = state => ({ count: state });

// const mapDispatchToProps = dispatch => ({
// 	increment: num => dispatch(createIncrementAction(num)),
// 	decrement: num => dispatch(createDecrementAction(num)),
// 	incrementAsync: (num, timeout) => dispatch(createIncrementAsyncAction(num, timeout))
// });

export default connect(
	// react-redux 優化版 , 直接在形參裡寫回調, 不另外在外面定義 mapStateToProps
	state => ({ count: state }),
	// react-redux 優化版 , 把原本定義的 mapDispatchToProps 回調改成 {key: action creator} 對象的形式,
	// 'react-redux' 會自動分發 (dispatch) 對象裡的 action ,
	// action creator 本身就是一個函數, 是可以接收參數的, 所以 UI 組件在調用 increment 時,
	// 實際上在調用 count_action_creator.js 裡的 createIncrementAction = data => ({ type: INCREMENT, data });
	// 所以可以傳遞參數進去
	{
		increment: createIncrementAction,
		decrement: createDecrementAction,
		incrementAsync: createIncrementAsyncAction
	}
)(CountUI);
