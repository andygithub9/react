## 6. 求和案例 ract-redux 數據共享版
1. 定義一個 Pserson 組件, 有 Count 組件通過 redux 共享數據。
2. 為 Person 組件編寫: reducer、action, 配置 constnt 常量。
3. 重點: Person 的 reducer 和 Count 的 Reducer 要使用combineReducers 進行合併, 合併後的總狀態是一個對象!!!
4. 交給 store 的是總 reducer, 最後注意在組件中出狀態的時候, 記得 "取到位" 。