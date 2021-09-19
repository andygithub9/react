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
              {/* 編寫路由鏈接 */}

              {/* 標籤體內容會傳到該組件的 props 的 children 屬性 */}
              <MyNavLink to='/about' a={1} b={2}>
                About
              </MyNavLink>

              {/* 直接在組件標籤傳遞 children 屬性傳給子組件的 props , 效果等同於將 children 的值寫在子組件的標籤體 */}
              <MyNavLink to='/home' children='Home' />
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 註冊路由 */}
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
