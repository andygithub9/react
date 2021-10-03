## 4. 求和例 react-redux 基本使用
1. 明確兩個概念:
    1. UI 組件: 不能使用任何 redux 的 api , 只負責介面的呈現、交互等。
    2. 容器組件: 負責和 redux 通信, 將結果交給 UI 組件。
2. 如何創建一個容器組件 -  靠 react-redux 的 connect 函數
connect(mapStateToProps, mapDispatchToProps)(UI組件)
    - mapStateToProps: 映射狀態, 返回值是一個對象
    - mapDispatchToProps: 映射操作狀態的方法, 返回值是一個對象
3. 備註: 容器組件中的 store 是靠 props 傳進去的, 而不是在容器組件中直接引入