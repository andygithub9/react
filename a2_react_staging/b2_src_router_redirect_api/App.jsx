import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
              <MyNavLink to='/home' children='Home' />
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 註冊路由 */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  {/* Redirect api 一般放在路由的最下方, 如果上面的路由都匹配不到就會重導向到 Redirect 的 to 的屬性值 */}
                  {/* 可以用作於一進入頁面看到的畫面, 因為一進入 localhost:3000 其實後面有一條斜線被隱藏了, 實際上是 localhost:3000/ ,
                      但是 '/' 的後面是空字符串匹配不到任何註冊路由, 所以用 Redirect 重定向到 to 屬性值的路由 */}
                  <Redirect to='/home' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
