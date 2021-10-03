## 6. 組件優化
### Component 的 2 個問題
1. 只要執行 setState() , 即使不改變狀態數據, 組件也會重新 render() -> 效率低
2. 只當前組件重新 render() , 就會自動重新 render 子組件 -> 效率低

### 效率高的做法
只有當組件的 state 或 props 數據發生改變時才重新 render()
### 原因
Component 中的 shouldComponentUpdate() 總是返回 true
### 解決
1. 辦法 1 :
重寫 shouldComponentUpdate() 方法
比較新舊 state 或 props 數據, 如果有變化才返回 true , 如果沒有回 false
2. 辦法 2 :
使用 PureComponent
PureComponent 重寫了 shouldComponentUpdate() , 只有 state 或 props 數據有變化才返回 true
     -  注意:
         1. PureComponent 重寫的 shouldComponentUpdate() 只是進行 state 和 props 數據的淺比較, 如果只是數據對象內部數據變了, 但是對象本身的內存地址沒變, 則返回 false
         2. 不要直接修改 state 數據, 而是要產生新數據

**項目中一般使用 PureComponent 來優化**