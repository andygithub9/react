import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default class Footer extends Component {

  static propTypes = {
    allDoneTodo: PropTypes.func.isRequired,
    clearDoneTodo: PropTypes.func.isRequired
  }

  // 全選 checkbox 的回調
  allDoneHandler = event => {
    const { allDoneTodo } = this.props;
    allDoneTodo(event.target.checked);
  }

  // 清除已完成 checkbox 的回調
  clearDoneHandler = () => {
    const { clearDoneTodo } = this.props;
    clearDoneTodo();
  }

  render() {
    const { todos } = this.props;

    // Array.reruce() 通常用來對數組作條件統計
    // Array.reruce( 回調函數: (上一次的值, 目前的元素)=>{}, 初始值 )
    const doneCount = todos.reduce((preValue, currentEle) => preValue + (currentEle.done ? 1 : 0), 0)

    // 多重三元運算式
    /* 
      已完成是 0 嗎? 是的話值為 false 不是的話
      已完成等於 todos 的總數嗎? 是的話值為 true 不是的話值為 false
    */
    // const isAllDone = doneCount === 0 ? false :
    //   doneCount === todos.length ? true : false;
    // 可以簡寫成下面

    // 已完成和 todos 的總數相等且已完成不等於 0 時值為 true 否則值為 false
    const isAllDone = doneCount === todos.length && doneCount !== 0 ? true : false;

    return (
      <div className="todo-footer">
        <label>
          {/* React 的 onChange 跟 js 原生的 onchange api 不太一樣, 只要點了 checkbox 就會觸發, 不管 checkbox 的 checked 沒有變動  */}
          <input checked={isAllDone} onChange={this.allDoneHandler} type="checkbox" />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button onClick={this.clearDoneHandler} className="btn btn-danger">清除已完成任務</button>
      </div>
    );
  }
}

