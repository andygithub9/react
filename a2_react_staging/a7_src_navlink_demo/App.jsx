import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

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
              {/* NavLink 渲染到頁面會是一個 a 標籤跟 Link 差不多, 
              但是 NavLink有個功能就是點擊 NavLink 時就會在這個 NavLink 這個標籤上加上 activeClassName 屬性指定的 class */}
              {/* navlink-demo class 定義在 public/index.html 的 style 標籤中 */}
              <NavLink
                activeClassName='navlink-demo'
                className='list-group-item'
                to='/about'
              >
                About
              </NavLink>
              <NavLink
                activeClassName='navlink-demo'
                className='list-group-item'
                to='/home'
              >
                Home
              </NavLink>
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
