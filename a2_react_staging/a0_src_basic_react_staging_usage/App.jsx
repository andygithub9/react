import React, { Component } from 'react';
// 在 React 中文件擴展名為 js 或 jsx 時, 引入的時候可以省略不寫
// 在 React 中引入的文件名為 index 時可以省略不寫
// import Hello from './components/Hello/index.jsx' // 可以簡寫成下面的形式
import Hello from './components/Hello'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Welcome />
      </div>
    );
  }
}

export default App;
