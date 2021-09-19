## 客戶端

1. 第一步:創建代理配置文件
   在 src 下創建配文件: src/setupProxy.js
2. 編寫 setupProxy.js 配置具體代理規則:

   ```js
   const proxy = require('http-proxy-middleware');

   module.exports = function (app) {
     app.use(
       proxy('/api1', {
         // 是需要轉發的請求(所有帶有/api前的請求都會轉發給5000)
         target: 'http://localhost:5000/', //配置轉發目標地址能返回數據的服務器地址)
         changeOrigin: true, //控制服務器接收到的請求頭中host字段的值
         /*
           changeOrigin 設置為 true 時, 服務器收到的請求頭中的 host 為: localhost:5000
           changeOrigin 設置為 false 時, 服務器收到的請求頭中的 host 為: localhost:3000
           changeOrigin 默認值為 false 但我們一般將 changeOrigin 值設為 true 
         */
         pathRewrite: { '^/api1': '' }, //去除請求前綴,保證交給後台服務器的是正常請求地址(必須配置)
       }),
       proxy('/api2', {
         target: 'http://localhost:5001/',
         changeOrigin: true,
         pathRewrite: { '^/api2': '' },
       })
     );
   };
   ```

## 服務端

1. 下載 express
   創建一個 server 用的資料夾

   ```bash
   npm init
   yarn add express
   ```

2. 創建兩個服務器  
    創建第一個服務器, 創建一個 server1.js 文件

   ```js
   const express = require('express');
   const app = express();
   const port = 5000;

   app.use((req, res, next) => {
     console.log('有人請求了服務器 1 ');
     console.log('請求來自於 Host : ', req.get('Host'));
     console.log('請求的地址: ', req.url);
     next();
   });

   app.get('/students', (req, res) => {
     const students = [
       { id: '001', name: 'Andy', age: 18 },
       { id: '002', name: 'Bob', age: 19 },
       { id: '003', name: 'Cindy', age: 20 },
     ];
     res.send(students);
   });

   app.listen(port, () => {
     console.log(
       `服務器 1 啟動成功, 請求學生信息的地址為 http://localhost:${port}/students`
     );
   });
   ```

   創建第二個服務器, 創建一個 server2.js 文件

   ```js
   const express = require('express');
   const app = express();
   const port = 5001;

   app.use((req, res, next) => {
     console.log('有人請求了服務器 2 ');
     console.log('請求來自於 Host : ', req.get('Host'));
     console.log('請求的地址: ', req.url);
     next();
   });

   app.get('/cars', (req, res) => {
     const car = [
       { id: '001', name: 'Audi', price: 1000 },
       { id: '002', name: 'Benz', price: 2000 },
       { id: '003', name: 'Ford', price: 800 },
     ];
     res.send(car);
   });

   app.listen(port, () => {
     console.log(
       `服務器 2 啟動成功, 請求學生信息的地址為 http://localhost:${port}/cars`
     );
   });
   ```
