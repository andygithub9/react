## 3. Hooks
1. React Hook/Hooks是什麼?
   1. Hook 是 React16.8.0 版本增加的新特性/新語法
   2. 可以讓你在函數組件中使用 state 及其他的 React 特性
2. 三個常用的 Hook
   1. State Hook: React.useState()
   2. Effect Hook: React.useEffect()
   3. Ref Hook: React.useRef()
### State Hook
   1. state Hook 函數組件也可以有 state 狀態, 並進行狀態數據的讀寫操作
   2. 語法: `const[xxx, setXxx] = React.useState(initValue)` , 通過數組的解構賦值取得 React.useState 返回的狀態和更新狀態的函數
   3. useState()說明:
      - 參數: 第一次初始化指定的值在內部作緩存
      - 返回值: 包含2個元素的數組, 第1個為內部當前狀態值, 第2個為更新狀態值的函數
   4. setXxx() 的2種寫法:  
      1. setXxx(newValue): 參數為非函數值, 直接指定新的狀態值, 內部用其覆蓋原來的狀態值
      2. setXxx(value => newValue): 參數為函數, 接收原本的狀態值, 返回新的狀態值, 內部用其覆蓋原來的狀態值

### Effect Hook
1. EffectHook 可以讓你在函數組件中行副作用操作(用於模擬類組件中的生命週期鉤子)
2. React 中的副作用操作:
   1. 發 ajax 請求數據獲取
   2. 設置訂閱 啟動定時器
   3. 手動更改真實DOM
3. 語法和說明:
    ```js
    useEffect(() => {
        //在此可以執行任何帶副作用操作
        return () => { //在件卸載前執行
            // 在此做一些收尾工作, 比如清除定時器/取消訂閱等
        }
    },[stateValue]) // 如果指定的是[], 回調函數只會在第一次 render() 後執行
    ```
4. 可以把 useffectHook 看做如下三個數的組合
   - componentDidMount ()
   - componentDidupdate()
   - componentwill Unmount()

### Ref Hook
1. Ref Hook可以在函數組件中存儲/查找組件內的標籤或任意其它數據
2. 語法: `const refContainer = React.useRef()`
3. 作用: 保存標籤對象, 功能與 React.createRef() 一樣