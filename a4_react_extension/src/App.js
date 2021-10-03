import React, { Component, Fragment } from 'react';
// import A1SetState from './components/A1SetState';
// import A2LazyLoad from './components/A2LazyLoad';
// import A3Hooks from './components/A3Hooks';
// import A4Fragment from './components/A4Fragment';
// import A5Context from './components/A5Context';
// import A6Optimize from './components/A6Optimize';
// import A7RenderProps from './components/A7RenderProps';
import A8ErrorBoundary from './components/A8ErrorBoundary/Parent';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				{/* <A1SetState /> */}
				{/* <A2LazyLoad /> */}
				{/* <A3Hooks /> */}
				{/* <A4Fragment /> */}
				{/* <A5Context /> */}
				{/* <A6Optimize /> */}
				{/* <A7RenderProps /> */}
				<A8ErrorBoundary />
			</Fragment>
		);
	}
}
