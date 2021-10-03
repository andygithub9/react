## 5. Context

### 理解
一種組件間通信方式,常用於【祖組件】與【後代組件】間通信

### 使用
1. 創建Context容器對象:
`const XxxContext = React.createContext()`

2. 渲染子組時, 外面包裏xxxContext.Provider, 通過 value 屬性給後代組件傳遞數據:
    ```jsx
    <xxxContext.Provider value={數據}>
      子組件
    </xxxContext.Provider>
    ```

3. 後代組件讀取數據
    ```jsx
    //第一種方式:僅適用於類組件
    static contextType = xxxContext // 聲明接收 conext
    this.context // 讀取 context 中的 value 數據

    //第二種方式:函數組件與類組件都可以
    <xxxContext.Consumer>
    {
      value=>( // value 就是 context 中的 value 數據
        要顯示的內容
      )
    }
    </xxxContext.Consumer>
    ```

### 注意
在應用開發中一般不用 context ,一般都用它的封裝 react 插件, 例如: react-redux 中就有用到 Provider 這個組件標籤