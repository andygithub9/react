import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Item extends Component {

  // 限制接收的 props 類型, 需要自行安裝 'prop-types' 庫
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

  state = { mouse: false } // 滑鼠移入移出的標識

  // 滑鼠移入移出的回調
  mouseHandler = flag => {
    return () => {
      this.setState({ mouse: flag });
    };
  }

  // checkbox 勾選的回調
  checkHandler = id => {
    return event => {
      const { updateTodo } = this.props;
      const { checked } = event.target;
      updateTodo(id, checked);
    }
  }

  delHandler = (event, id) => {
    const { delTodo } = this.props;
    // window.confirm 是原生 js 提供的 api
    if (!window.confirm('確定要刪除嗎?')) return;
    delTodo(id);
  }

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    // Warning: You provided a `checked` prop to a form field without an `onChange` handler. 
    // This will render a read-only field. If the field should be mutable use `defaultChecked`. 
    // Otherwise, set either `onChange` or `readOnly`.
    // 警告: 你從字段提供一個 `checked` 屬性但沒有使用 `onChange` 處理, 這會渲染一個只讀字段, 
    //        如果你希望字段是可變的要使用 `defaultChecked` 屬性, 不然就應該設置 `onChange` 事件或 `readOnly` 屬性。
    // 如果使用 checked={done} 這種寫法會把 checkbox 寫死, 全部的 checkbox 都會被勾選而且不能取消勾選。
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
        onMouseEnter={this.mouseHandler(true)}
        onMouseLeave={this.mouseHandler(false)}>
        <label>
          {/* React 的 onChange 跟 js 原生的 onchange api 不太一樣, 只要點了 checkbox 就會觸發, 不管 checkbox 的 checked 沒有變動  */}
          {/* onChange 調用回調更新 App 組件狀態的 todos 裡的 done 值, App 組件狀態被更新會重新渲染組件, 
              checked 會再根據 App 組件狀態的 todos 裡的 done 值是 true 或 false 決定要不要勾選  */}
          {/* defaultChecked 只有在初次渲染給默認值, 之後更新狀態重新 render 時, defaultChecked 不起作用, 盡量使用 checked 代替 defaultChecked */}
          <input type="checkbox" checked={done} onChange={this.checkHandler(id)} />
          <span>{name}</span>
        </label>
        <button onClick={event => this.delHandler(event, id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>刪除</button>
      </li>
    );
  }
}

