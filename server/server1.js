const express = require('express');
const app = express();
const port = 5000;

app.use((req, res, next) => {
  console.log('有人請求了服務器 1 ');
  console.log('請求來自於 Host : ', req.get('Host'));
  console.log('請求的地址: ', req.url);
  next();
})

app.get('/students', (req, res) => {
  const students = [
    { id: '001', name: 'Andy', age: 18 },
    { id: '002', name: 'Bob', age: 19 },
    { id: '003', name: 'Cindy', age: 20 }
  ]
  res.send(students);
})

app.listen(port, () => {
  console.log(`服務器 1 啟動成功, 請求學生信息的地址為 http://localhost:${port}/students`);
})