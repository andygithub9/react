import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default class App extends Component {


  // 更新 state
  updateAppState = stateObj => this.setState(stateObj)

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 
                  路由原理: 
                    更改網址列的地址時 'react-router-dom' 偵測到地址有更新就會解析該地址, 並把該地址註冊路由對應的組件更新到畫面上
                    <Link to="路由鏈接名"></Link>
                    <Route path="路由鏈接名" component={對應組件名} />
                  注意: 有用到 'react-router-dom' 的 API 組件最外層一定要包 <BrowserRouter> 或 <HashRouter> 標籤,
                        因為我們寫的是 SPA 所以建議直接包在 src/index.js 最上層的 App 組件外面, 
                        路由組件應該放在 src/pages 文件夾下面, 一般組件應該放在 src/components 文件夾下面
               */}
              {/* 在 React 中靠路由鏈接實現切換組件 - 編寫路由鏈接 */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 註冊路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
