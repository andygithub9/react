import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
import Test from './pages/Test';

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
                {/* 通過 react-router-dom 的 API 組件 Switch 可以在匹配到第一個路由後就不再向下匹配  */}
                <Switch>
                  <Route path='/about' component={About} />
                  {/* 因為 Switch 組件的關係, 路由 '/home' 匹配到 Test 組件後就停止匹配, 
                  不會再往下匹配路由同樣為 '/home' 的 Home 組件 */}
                  <Route path='/home' component={Test} />
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
