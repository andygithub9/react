const proxy = require('http-proxy-middleware');
module.exports = function (app) {

  /*
    通過代理中間件 'http-proxy-middleware' 避開同源政策
      1. 甚麼是同源政策?
        1. https://zh.wikipedia.org/wiki/%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5 
        2. https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy
        3. https://medium.com/starbugs/%E5%BC%84%E6%87%82%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-same-origin-policy-%E8%88%87%E8%B7%A8%E7%B6%B2%E5%9F%9F-cors-e2e5c1a53a19
        4. 主機名 host 和埠號 port 相同就視為同源(Same Origin), 不同源即為跨域(Cross-Origin) , 跨域的網路存取通常會遭到限制
        5. 例如: 
            目前的情況, React 默認伺服器開在 http://localhost:3000/ , 端口號為 3000 , 
            但是我們想對伺服器 http://localhost:5000/ 發請求獲取資源, 雖然 host 一樣但是端口號不一樣, 就會被視為不同源, 而被禁止存取,
            此時就可以通過代理中間件 'http-proxy-middleware' 避開同源政策
      2. ajax 底層運行分析
        1. 目前有兩台伺服器, React : 3000 端口, express : 5000 端口
        2. 3000 通過 ajax 引擎向 5000 發請求, 5000 收到請求並響應數據, 此時 ajax 引擎發現響應數據的是 5000 並不是 3000 ,
            代表響應數據的伺服器跨域了, ajax 引擎就會將這次的響應擋在外面不讓他回來     
        3. 通過代理中間件避開同源政策:
            在 3000 開一個代理伺服器, 3000 通過 ajax 引擎發送請求給一樣在 3000 的代理伺服器, 代理伺服器將請求發送給 5000, 
            5000 響應數據給代理伺服器, 代理伺服器再將響應數據傳給 3000 , 注意, 此時 ajax 引擎就會放行響應數據, 
            因為代理伺服器跟 ajax 引擎發送請求的伺服器同樣在 3000 , ajax 引擎看到響應數據的伺服器是同為在 3000 的伺服器, 
            就會讓響應數據進來。

            為什麼代理伺服器開在 3000 但是可以接收 5000 響應的數據? 因為代理伺服器沒有 ajax 引擎所以不會把 5000 的數據擋在外面。

            產生跨域問題的本質是 ajax 引擎把響應數據攔截了, 代理伺服器是通過請求轉發的形式沒有通過 ajax 引擎, 也就不存在跨域的問題, 
            也就不受同源策略的限制, 所以就能接收到 5000 響應數據。
  */

  // URL : 統一資源定位符（英語：Uniform Resource Locator，縮寫：URL，或稱統一資源定位器、定位位址、URL位址）
  // 俗稱網頁位址，簡稱網址，是網際網路上標準的資源的位址（Address）
  // 標準格式如下：
  // [協定類型]://[伺服器位址 host]:[埠號 port]/[檔案路徑][檔名]?[查詢]#[片段ID]

  app.use(
    proxy('/api1', { // 發現請求地址帶有 '/api1' 時, 就會觸發該代理配置 
      target: 'http://localhost:5000/', // 將請求轉發給誰
      // changeOrigin 設為 true 時改變服務器收到的請求頭的 host 字段為 target 中的 host:port , 
      // changeOrigin 默認為 false 不改變請求頭的 host 字段, 就會用自己這個伺服器的 host 
      changeOrigin: true,
      // '^/api1' 是一個正則表達式, 把請求地址 '/api1' 開頭的替換成 '' , 
      // 如果沒有替換發出請求會是 http://localhost:5000/api1/students , 但是 5000 下並沒有 api1 的路徑, 就會造成 404 錯誤,
      // 應該要把 /api1 替換為空字串發出的請求地址才會是正確的 http://localhost:5000/students
      pathRewrite: { '^/api1': '' }
    }),
    proxy('/api2', {
      target: 'http://localhost:5001/',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    }),
    proxy('/error-demo', {
      target: 'http://localhost:5001/',
      // 如過沒有對 changeOrigin 和 pathRewrite 進行配置就會發出 http://localhost:3000/error-demo/cars 這樣錯誤的請求
    })
  );
};