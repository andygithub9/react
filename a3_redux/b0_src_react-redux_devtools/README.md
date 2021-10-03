https://github.com/zalmoxisus/redux-devtools-extension#usage
## 8. 求和案例 react-redux 開發者工具的使用
1. yarn add redux-devtools-extension
2. store 中進行配置
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))