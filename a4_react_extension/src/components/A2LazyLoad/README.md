## 2. lazyLoad
路由組件的 lazyLoad
```jsx
// 1. 通過 React 的 lazy 函數配合 import 數動態加載路由組件 -> 路由組件代碼會被分開打包
const Login = lazy(()=>import('@/pages/Login'))

// 2. 通過 <Suspense> 指定在加載得到路由打包文件前顯示一個自定義 loading 界面
<Suspense fallback={<h1>loading.. ..</h1>}>
  <Switch>
    <Route path="/xxx" component={xxxx}/>
    <Redirect to="/login"/>
  </Switch>
</Suspense>
```