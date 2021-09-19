import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {

  // 點擊事件的回調
  search = () => {
    // 獲取用戶輸入, 通過解構賦值 + 重命名
    const { keyWordNode: { value: keyWord } } = this;

    // 發送請求前通知 List 更新狀態, 關閉 isFirst , 開始 loading
    PubSub.publish('GET GITHUB USERS', { isFirst: false, isLoading: true });

    // 發送網路請求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      // 發送請求前通知 List 更新狀態, 將響應數據傳遞給 List 的 users 狀態 ,關閉 isFirst 
      response => PubSub.publish('GET GITHUB USERS', { users: response.data.items, isLoading: false }),
      // 發送請求前通知 List 更新狀態, 關閉 loading , 將響應錯誤訊息傳遞給 List 的 isError 狀態
      error => PubSub.publish('GET GITHUB USERS', { isLoading: false, isError: error })
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github Users</h3>
        <div>
          <input ref={node => this.keyWordNode = node} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
