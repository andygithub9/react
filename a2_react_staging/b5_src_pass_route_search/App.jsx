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
                {/* 匹配路由的流程, 以二級路由鏈接 '/home/news' 為例,
                    在第一層路由時路由鏈接為 '/home/news' 匹配到路由 '/home' ,
                    接著在繼續往下一層匹配在第二層路由時路由鏈接為 '/home/news' 匹配到路由 '/home/news' ,
                    注意: 所以在路由加上 exact 屬性的話只會匹配到該層路由就不接下去匹配下一層
                */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  {/* <Route exact path='/home' component={Home} /> */}
                  <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
