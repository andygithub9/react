## 'react-router-dom' 庫的 withRouter 函數
- withRouter 可以加工一般組件, 讓一般組件具備路由組件所特有的 API
- withRouter 的返回值是一個新組件

## BrowserRouter 和 HashRouter 的區別
1. 底層原理不一樣:
BrowserRouter 使用的是 HTML5 的 history API, 不兼容 IE9 及以下版本。
HashRouter 使用的是 URL 的哈希值。
2. path 表現形式不一樣
BrowserRouter 的路徑中沒有 # , 例如: localhost:3000/demo/test
HashRouter 的路徑包含 # , 例如: localhost:3000#/demo/test
3. 刷新後對路由 state 參數的影響
    1. BrowserRouter 沒有任何影響, 因為 state 保存在 history 對像中。
    2. HashRouter 刷新後會導致路 Hstate 參數的丟失!!!
4. 備註: HashRouter 可以用於解決一些路徑借誤相關的問題。