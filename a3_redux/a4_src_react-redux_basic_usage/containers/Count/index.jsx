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

/* 
  func()() 代表第一個調用 func() 返回一個函數後, 再調用 func() 返回的函數

  使用 connect()(UI組件) 創建並暴露一個 Count 容器組件
  
  connect() 函數可以接到兩個形參, 兩個形參都必須是函數,
  第一個函數規範的名稱是 'mapStateToProps' , 可以接到 store 中的 state 作為形參,
  第二個函數規範的名稱是 'mapDispatchToProps' , 可以接到 store 的 dispatch 作為參數
 */

// mapStateToProps 是 connect 的第一個形參函數, 此函數可以接收到 store 中的 state ,
// 再將返回的對象通過容器組件標籤的 props 傳遞 store 給 UI 組件, UI 組件就能獲取 store 中的 state
const mapStateToProps = state => ({ count: state });

// mapDispatchToProps 是 connect 的第二個形參函數, 此函數可以接收到 store 的 dispatch 函數用於更改 store 的狀態 ,
// 再將返回的對象通過容器組件標籤的 props 傳遞給 store 給 UI 組件, UI 組件根據自身需求判斷要用對象裡的哪個函數, 就能對 store 的狀態進行更新
const mapDispatchToProps = dispatch => ({
	increment: num => dispatch(createIncrementAction(num)),
	decrement: num => dispatch(createDecrementAction(num)),
	incrementAsync: (num, timeout) => dispatch(createIncrementAsyncAction(num, timeout))
});

// 向 App.jsx 暴露此已經傳入 CountUI UI 組件的容器組件, 在容器組件標籤傳遞 store 作為子 UI 組件的 props
// 如此一來容器組件可以通過 props 向 UI 組件傳遞 store
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
