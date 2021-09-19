import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  // 更新 state
  updateAppState = (stateObj) => this.setState(stateObj);

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <MyNavLink to='/about' a={1} b={2}>
                About
              </MyNavLink>

              {/* 多級路由造成寫在 public/index.html 裡的 link 標籤中的相對路徑請求出錯, 
              link 標籤中的路徑應該寫成絕對路徑避免請求出錯, 在 React 中請求路徑出錯找不到問題 (error 404) , 
              React 默認返回 public/index.html */}
              {/* http://localhost:3000/xxx/yyy 點擊左邊的鏈接會發現返回的是 public/index.html , 
              這是因為當路徑找不到檔案時 React 默認導向 public/index.html */}
              {/* 
                  開啟頁面開啟 devtool 的 Network 找到 bootstrap.css 點擊 Headers 查看請求的 URL , 
                  會發現 Request URL: http://localhost:3000/css/bootstrap.css 是沒問題的。

                  點擊下方的 Miss style demo 路由鏈接, 因為 SPA是單頁面應用所以點路由鏈接不會發生頁面跳轉,
                  所以請求地址依然是沒有問題的 Request URL: http://localhost:3000/css/bootstrap.css 。

                  按住 shift + f5 強制刷新頁面開啟 devtool 的 Network 找到 bootstrap.css 點擊 Headers 查看請求的 URL , 
                  會發現請求地址是 Request URL: http://localhost:3000/missing/style/css/bootstrap.css 但是我們的檔案中根本沒有這個路徑,
                  再點到 Response 查看響應數據發現上面這個地址響應的數據是 public/index.html , 
                  因為 React 默認只要找不到檔案就返回 public/index.html

                  為什麼強制刷新頁面後請求路徑會是 http://localhost:3000/missing/style/css/bootstrap.css , 
                  因為強制刷新後 React 會認為 missing/style/css 這個路徑是 http://localhost:3000 中的一部份

                  解決的方法是 public 文件夾下的資源都必須用絕對路徑, 方法有兩種:
                    1. <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css" /> 使用 %PUBLIC_URL% , 
                        %PUBLIC_URL% 是 React 幫你設置好的 public 的絕對路徑
                    2. <link rel="stylesheet" href="/%PUBLIC_URL%/css/bootstrap.css" /> 直接使用絕對路徑, 路徑前面不加 '.'
               */}
              {/* http://localhost:3000/ 代表的就是 public 文件夾 */}
              {/* network 中的請求 status 如果是 304 代表他走緩存了 */}
              <MyNavLink to='/missing/style/demo' children='Miss style demo' />

              <MyNavLink to='/home' children='Home' />
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 註冊路由 */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/missing/style/demo' component={Home} />
                  <Route path='/home' component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
