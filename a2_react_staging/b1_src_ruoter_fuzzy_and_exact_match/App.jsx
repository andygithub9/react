import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Test from './pages/Test';
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
              <MyNavLink to='/home' children='Home' />
              <MyNavLink to='/test/a/b/c' children='Test' />
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 註冊路由 */}
                <Switch>
                  {/* Route 標籤有 exact 屬性代表與地址欄的地址精準匹配, 沒有 exact 代表與地址欄的地址模糊匹配 */}
                  {/* 
                      模糊匹配範例:
                        可以匹配成功:
                          <MyNavLink to='/test/a/b/c' />
                          <Route path='/test' component={Test} />

                        不能匹配成功:
                          1. 匹配是指匹配開頭, 開頭不一樣就匹配不到
                              <MyNavLink to='/a/test/b/c' />
                              <Route path='/test' component={Test} />
                          2. 路由鏈接的 to 屬性路徑層數比路由少時也匹配不到
                              <MyNavLink to='/test' />
                              <Route path='/test/a/b/c' component={Test} />
                   */}
                  <Route exact path='/about' component={About} />
                  <Route exact path='/home' component={Home} />
                  <Route path='/test/abc' component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
