## 8. 錯誤邊界
### 理解:
錯誤邊界(Error boundary): 用來捕穫後代組件錯誤, 渲染出備用頁面
### 特點:
只能捕穫後代組件生命週期產生的錯誤, 不能捕獲自己組件產生的錯誤和其他組件在合成事件、 定時中產生的錯誤
### 使用方式:
getDerivedStateFromError 配合 componentDidCatch
```jsx
// 生命週期函數,一旦後台組件報錯,就會觸發
static getDerivedStateFromerror(error) {
    console.log(error);
    // 在 render 之前觸發
    // 返回新的state
    return {
       hasError:  true,
    };
}

componentDidCatch(error, info) {
    // 統計頁面的錯誤。發送請求發送到後台去
    console.log(error, info);
}
```
### 只有 class 組件才可以成為錯誤邊界組件
只有 class 組件才可以成為錯誤邊界組件。大多數情況下, 你只需要聲明一次錯誤邊界組件, 並在整個應用中使用它。
### 參考文檔
https://zh-hans.reactjs.org/docs/error-boundaries.html#introducing-error-boundaries