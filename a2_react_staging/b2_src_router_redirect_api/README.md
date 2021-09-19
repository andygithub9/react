## Redirect 的使用

1. 一般號在所有路由註冊的最下方, 當所有路由都無法匹配時, 跳轉到 Redirect 指定的路由
2. 具體編碼:

   ```jsx
   <Switch>
     <Route path='/about' component={About} />
     <Route path='/home' component={Home} />
     <Redirect to='/about' />
   </Switch>
   ```
