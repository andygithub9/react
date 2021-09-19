## 向路由組件傳遞參數

1. params 參數
   路由鏈接(攜帶參數): `<Link to='/demo/test/tom/18'>詳情</Link>`
   註冊路由(聲明接收): `<Route path="/demo/test/:name/:age" component={Test}/>`
   接收參數: `const {id, title} = this.props.match.params`
