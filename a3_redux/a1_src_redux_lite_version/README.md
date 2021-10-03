## 1. 求和案例 redux 精簡版
1. 去除 count 組件自身的狀態
2. src文件夾下建立:
    - redux
      - store.js
      - count_reducer.js
3. store.js:
    1. 引入 redux 中的 createStore 函數, 創建一個 store
    2. createStore 調用時要傳入一個為其服務的 reducer
    3. 記得暴露 store 對象
4. count_reducer.js :
    1. reducer 的本質是一個函數, 接收: prestate, action, 返回加工後的狀態
    2. reducer 有兩個作用: 初始化狀態, 加工狀態
    3. reducer 被第一次調用時, 是 store 自動觸發的, 
      傳遞的 preState 是 undefined,
      傳遞的 action 是 {type: "@@redux/INIT亂碼", data: undefined }
5. 在 index.js 中通過 store.subscribe() 監測 store 中狀態的改變, 一旦發生改變重新渲染 `<App />`

備註: redux 只負責管理狀態, 至於狀態的改變驅動著頁面的展示, 要靠我們自己寫。 