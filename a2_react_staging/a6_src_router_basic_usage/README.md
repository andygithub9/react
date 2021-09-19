## 路由的理解

1. 什麼是路由?
   1. 一個路由就是一個映射關係(key.value)
   2. key 為路徑, value 可能 function 或 component
2. 路由分類
   1. 後端路由:
      1. 理解: value 是 function 來處理戶端的求。
      2. 註冊路由: `router.get(path, function(req, res))`
      3. 工作過程: 當 node 接收到一個請求時, 根據請求路徑找到匹配的路由, 調用路由中的函數來處理請求, 返迴響應數據
   2. 前端路由:
      1. 瀏覽器端路由, value 是 component , 用於展示頁面內容。
      2. 註冊路由: `<Route path="/test" component={Test}>`
      3. 工作過程: 當瀏覽器的 path 變為 /test 時, 當前路由組件就會變為 Test 組件

## react-router-dom 的理解

1. react 的一個插件庫。
2. 專門用來實現一個 SPA 應用。
3. 基於 react 的項目基本都會用到此庫。

## 路由的基本使用

1. 明確好界面中的導航區、展示區
2. 導航區的 a 標籤改為 Link 標籤 `<Link to="/demo">Demo</Link>`
3. 展示區寫 Route 標籤進行路徑的匹配 `<Route path='/demo'component=(Demo} />`
4. `<App>` 的最外側包表了一個 `<BrowserRouter>` 或 `<HashRouter>`
5. 路由組件應該放在 src/pages 文件夾下面, 一般組件應該放在 src/components 文件夾下面

## 路由組件與一般組件的差異
1. 寫法不同:
一般組件: `<Demo />`
路由組件: `<Route path="/demo" component={Demo}/>`
2. 存放位置不同:
一般組件: components
路由組件: pages
3. 接收到的 props 不同:
一般組件: 寫組件標籤時傳遞了什麼, 就能收到什麼
路由組件: 接收到三個固定的屬性  

      ```js
      history:
         go: ƒ go(n)
         goBack: ƒ goBack()
         goForward: ƒ goForward()
         push: ƒ push(path, state)
         replace: ƒ replace(path, state)
      location:
         pathname: "/about"
         search: ""
         state: null
      match:
         params: {}
         path: "/about"
         url: "/about"

      ```