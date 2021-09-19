import React, { Component } from 'react';
import { Button, DatePicker, Space, ConfigProvider } from 'antd';
import zhTW from 'antd/lib/locale/zh_TW';
// antd 的漢化有問題所以通過 `yarn add moment` 重新安裝 moment 再導入一次中文的 js
import 'moment/locale/zh-tw';
import './App.less';

const { RangePicker } = DatePicker;

export default class App extends Component {
	render() {
		return (
			<ConfigProvider locale={zhTW}>
				<div className='App'>
					<Button type='primary'>Button</Button>
					<Space direction='vertical' size={12}>
						<RangePicker />
						<RangePicker showTime />
					</Space>,
				</div>
			</ConfigProvider>
		);
	}
}
