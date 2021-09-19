const express = require('express');
const app = express();
const port = 5001;

app.use((req, res, next) => {
  console.log('有人請求了服務器 2 ');
  console.log('請求來自於 Host : ', req.get('Host'));
  console.log('請求的地址: ', req.url);
  next();
})

app.get('/cars', (req, res) => {
  const car = [
    { id: '001', name: 'Audi', price: 1000 },
    { id: '002', name: 'Benz', price: 2000 },
    { id: '003', name: 'Ford', price: 800 }
  ]
  res.send(car);
})

app.listen(port, () => {
  console.log(`服務器 2 啟動成功, 請求學生信息的地址為 http://localhost:${port}/cars`);
})