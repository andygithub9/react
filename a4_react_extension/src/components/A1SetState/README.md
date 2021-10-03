## 1. setState
### setState 更新狀態的 2 種寫法
1. setState(stateChange, [callback]) - 對象式的 setState
    1. stateChange 為狀態改變對象(該對象可以體現出狀態的更改)
    2. callback 是可選的回調數, 它在狀態更新完畢, 界面也更新後(render調用後)才被調用
2. setState(updater, [callback]) - 函數式的setState
    1. updater 為返回 statechange 對象的函數。
    2. updater 可以接收到 state 和 props。
    3. callback是可選的回調函數, 它在狀態更新, 界面也更新後(render調用後)才被調用。
### 總結:
1. 對象式的 setState 是函數式的 setState 的簡寫方式(語法糖)
2. 使用原則:
    1. 如果新狀態不依賴於原狀態 -> 使用對象方式
    2. 如果新狀態依賴於原狀態 -> 使用函數方式
    3. 如果需要在 setState  執行後獲取最新的狀態數據, 要在第二個callback 函數中讀取