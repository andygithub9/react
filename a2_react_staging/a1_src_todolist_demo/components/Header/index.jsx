import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'; // nanoid 庫中用了分別暴露的形式暴露 nanoid() 函數, nanoid() 函數用來產生一個唯一鍵字符串
import './index.css';

export default class Header extends Component {

  // 限制接收的 props 類型, 需要自行安裝 'prop-types' 庫
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = event => {
    const { target, keyCode } = event;
    const { addTodo } = this.props;

    if (keyCode !== 13) return;
    if (target.value.trim() === '') { alert('代辦事項不能為空'); return; }

    // 安裝 nanoid 一個產生 uuid 的庫, uuid 是一種通過演算法產生的唯一鍵
    addTodo({ id: nanoid(), name: target.value, done: false });

    // 回車後清空輸入框
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱,按回車鍵確認" />
      </div>
    );
  }
}

