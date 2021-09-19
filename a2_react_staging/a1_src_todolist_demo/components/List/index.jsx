import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {

  // 限制接收的 props 類型, 需要自行安裝 'prop-types' 庫
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, delTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo} delTodo={delTodo} />)}
      </ul>
    );
  }
}
