import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
	// 更新 state
	updateAppState = stateObj => this.setState(stateObj);

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
