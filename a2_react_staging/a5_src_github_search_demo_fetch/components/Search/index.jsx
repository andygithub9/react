import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {

  // 點擊事件的回調
  search = async () => {
    // 獲取用戶輸入, 通過解構賦值 + 重命名
    const { keyWordNode: { value: keyWord } } = this;

    // 發送請求前通知 List 更新狀態, 關閉 isFirst , 開始 loading
    PubSub.publish('GET GITHUB USERS', { isFirst: false, isLoading: true });

    // 發送網路請求
    //#region
    /* axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      // 發送請求前通知 List 更新狀態, 將響應數據傳遞給 List 的 users 狀態 ,關閉 isFirst 
      response => PubSub.publish('GET GITHUB USERS', { users: response.data.items, isLoading: false }),
      // 發送請求前通知 List 更新狀態, 關閉 loading , 將響應錯誤訊息傳遞給 List 的 isError 狀態
      error => PubSub.publish('GET GITHUB USERS', { isLoading: false, isError: error })
    ) */
    //#endregion

    // 發送網路請求 - 使用 fetch 發送 (未優化)
    //#region
    /* fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log('聯繫服務器成功', response); // 這裡的 response 是聯繫服務器相關的數據
        // response.json() 是一個 Promise 對象, 裡面才是發出請求後服務器響應的數據, 
        // 返回 response.json() 之後再用 .then() 的鍊式調用取出響應的數據
        return response.json();
      },
      error => {
        console.log('聯繫服務器失敗', error);
        // 返回空的 Promise 對象實例, 中止 .then 的鍊式調用, 
        // 如果返回默認值 undefined 時, undefined 為非 Promise 值, 當前這個 .then 返回的 Promise 實例狀態就為成功的值為 undefined , 
        // .then 的鍊式調用會走成功
        return new Promise(() => { }); // 返回空的 Promise , 中止 .then 的鍊式調用
        // return new Promise((resolve, rejected) => rejected()); // 返回失敗狀態的 Promise , .then 的鍊式調用會走失敗的 error
      }
    ).then(
      response => { // 取出響應數據
        console.log('數據獲取成功了', response);
        PubSub.publish('GET GITHUB USERS', { users: response.items, isLoading: false })
      },
      error => {
        console.log('數據獲取失敗了', error)
        PubSub.publish('GET GITHUB USERS', { isLoading: false, isError: error })
      }
    ) */
    //#endregion


    // 發送網路請求 - 使用 fetch 發送 (優化)
    //#region
    /* fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log('聯繫服務器成功', response); // 這裡的 response 是聯繫服務器相關的數據
        // response.json() 是一個 Promise 對象, 裡面才是發出請求後服務器響應的數據, 
        // 返回 response.json() 之後再用 .then() 的鍊式調用取出響應的數據
        return response.json();
      }
    ).then(
      response => { // 取出響應數據
        console.log('數據獲取成功了', response);
        PubSub.publish('GET GITHUB USERS', { users: response.items, isLoading: false })
      }
    ).catch(error => {
      console.log('請求失敗了', error)
      PubSub.publish('GET GITHUB USERS', { isLoading: false, isError: error })
    }) */
    //#endregion

    // 發送網路請求 - 使用 fetch 發送 (再優化)
    try {
      // async 函數裡面才可以用 await 關鍵字, 所以記得要在 await 的外面那層函數加上 async 關鍵字
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`);
      const data = await response.json()
      PubSub.publish('GET GITHUB USERS', { users: data.items, isLoading: false })
    } catch (error) {
      console.log('請求失敗了', error)
      PubSub.publish('GET GITHUB USERS', { isLoading: false, isError: error })
    }

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
