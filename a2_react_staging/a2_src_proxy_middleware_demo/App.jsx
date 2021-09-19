import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      res => console.log('成功獲取學生數據', res.data),
      err => console.log('獲取學生數據失敗', err)
    )
  }

  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      res => console.log('成功獲取汽車數據', res.data),
      err => console.log('獲取汽車數據失敗', err)
    )
  }

  proxyErrorDemo = () => {
    axios.get('http://localhost:3000/error-demo/cars').then(
      res => console.log('成功獲取汽車數據', res.data),
      err => console.log('獲取汽車數據失敗', err)
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>點我獲取學生數據</button>
        <button onClick={this.getCarData}>點我獲取汽車數據</button>
        <button onClick={this.proxyErrorDemo}>點我查看客戶端與服務端的錯誤訊息</button>
      </div>
    )
  }
}
