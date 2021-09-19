## 向路由組件傳遞參數

1. params 參數
   路由鏈接(攜帶參數): `<Link to='/demo/test/tom/18'>詳情</Link>`
   註冊路由(聲明接收): `<Route path="/demo/test/:name/:age" component={Test}/>`
   接收參數: `const {name, age} = this.props.match.params`

2. search 參數
   路由鏈接(攜帶參數):`<Link to='/demo/test/?name=tom&age=18'>詳情/Link>`
   註冊路由(無需聲明, 正常註冊即可): `<Route path="/demo/test" component={Test}>`
   接收參數: `const {search}=this.props.location`
   備註: 獲取到的 search 是 urlencoded 編碼字符串, 需要藉助 querystring 解析成對象