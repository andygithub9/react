import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css'

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    isError: false
  };

  // 組件掛載之後的回調
  // 組件掛載之後訂閱 'GET GITHUB USERS'
  componentDidMount() {
    // mySubscriber 的第一個參數是訂閱名, 但是用不到所以直接用底線當作佔位符代替
    // 注意: 訂閱的回調不能用普通函數否則 this 會指向 undefined , 要使用箭頭函數 this 才會指向 List 組件實例對象
    // const mySubscriber = function (_, data) { console.log(this); };
    const mySubscriber = (_, stateObj) => this.setState(stateObj);
    this.token = PubSub.subscribe('GET GITHUB USERS', mySubscriber);
  };

  // 組件即將卸載的回調
  // 組件即將卸載時取消訂閱
  componentWillUnmount() { PubSub.unsubscribe(this.token); };

  render() {
    const { users, isFirst, isLoading, isError } = this.state;
    return (
      <div className="row">

        {
          isFirst ? <h2>歡迎使用, 輸入關鍵字, 隨後點擊搜索</h2> :
            isLoading ? <h2>LOADING...</h2> :
              isError ? <h2 style={{ color: 'red' }}>{isError.message}</h2> :
                users.map(user => {
                  return (
                    <div key={user.id} className="card">
                      <a href={user.html_url} target="_blank" rel="noreferrer">
                        <img alt="avatar" src={user.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })
        }

      </div>
    )
  }
}
