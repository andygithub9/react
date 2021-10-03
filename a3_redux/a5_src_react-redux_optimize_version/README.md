## 5. 求和案例 react-redux 優化
1. 無需自己給容器組件傳遞 store , 給 `<App />` 包裏一個 `<Provider store={store}>` 即可。
2. 使用了react-redux 後也不用再自己監測 redux 中狀態的改變了, 容器組件可以自動完成這個工作。
3. mapDispatchToProps 也可以簡單的寫成一個對象
4. 一個組件要和 redux 打交道要經過那幾步?
    1. 定義好一個不暴露的 UI 組件
    2. 引入 connect 生成一個容器組件, 並暴露, 寫法如下:
        ```js
            connect(
                state=>({key:value}), // 映射狀態
                {key: xxxxxAction} // 映射操作狀態的方法
            )(UI組件)
        ```
    3. 在 UI 組件中通過 this.props.xxxxxxx 讀取和操作狀態