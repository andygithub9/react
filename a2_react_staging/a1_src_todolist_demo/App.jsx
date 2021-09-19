import React, { Component } from 'react'; // 第三方庫放最上面
import Header from './components/Header'; // 自己寫的放中間
import List from './components/List';
import Footer from './components/Footer';
import './App.css'; // 樣式表放最下面

class App extends Component {
  // 狀態在哪裡, 操作方法的狀態就會在哪裡

  // 因為目前只學到父子組件的通信所以將狀態放在父組件統一管理
  // 初始化狀態
  state = {
    todos: [
      { id: '001', name: '吃飯', done: true },
      { id: '002', name: '睡覺', done: true },
      { id: '003', name: '打代碼', done: false }
    ]
  };

  // 定義一個方法通過標籤屬性傳給子組件 List 的 props , 讓子組件可以跟父組件通信
  addTodo = (todo) => {
    const { todos } = this.state;
    const newTodos = [todo, ...todos];
    this.setState({ todos: newTodos });
  }

  // 定義一個方法通過標籤屬性傳給孫組件 Item 的 props , 讓孫組件可以跟父組件通信
  // 先傳給 List 的 props , 再通過 List 的 props 傳遞給 Item 的 props 
  updateTodo = (id, checked) => {
    const { todos } = this.state;
    const newTodo = todos.map(todo => {
      // 通過展開運算符複製對象同時更新或新增屬性 {...obj, 更新/新增屬性: 更新/新增屬性值}
      if (todo.id === id) return { ...todo, done: checked };
      return todo;
    })
    this.setState({ todos: newTodo });
  }

  // 先傳給 List 的 props , 再通過 List 的 props 傳遞給 Item 的 props 的函數, 
  // Item 組件調用此函數並傳入 id , 通過 filter 把傳入的 id 對應的代辦事項過濾掉
  delTodo = id => {
    const { todos } = this.state;
    const newTodo = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodo });
  }

  // 給 footer 的全選 checkbox 調用的方法
  allDoneTodo = (done) => {
    const { todos } = this.state;
    // {屬性: 屬性值} 屬性和屬性值重名時可以簡寫成 {屬性}
    // 使用箭頭函數返回對象時不能使用單行默認返回的形式, 因為 js 不知道你的花括號是箭頭函數的花括號還是對象的花括號
    const newTodo = todos.map(todo => { return { ...todo, done } });
    this.setState({ todos: newTodo });
  }

  // 給 footer 的清除已完成的 btn 調用的方法
  clearDoneTodo = () => {
    const { todos } = this.state;
    const newTodo = todos.filter(todo => !todo.done);
    this.setState({ todos: newTodo });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List key={todos.id} todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo} />
          <Footer todos={todos} allDoneTodo={this.allDoneTodo} clearDoneTodo={this.clearDoneTodo} />
        </div>
      </div>
    );
  }
}

export default App;
