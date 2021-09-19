import React, { Component } from 'react';
// css 的模塊化, 將 css 文件名改成 'XXX.module.css' , 引入時的語句改成 "import YYY from './index.module.css';" ,
// YYY 就會變成一個對象, 對象中的屬性就是你在 css 當中定義的 class
import css from './index.module.css';

export default class Welcome extends Component {
  render() {
    console.log(css)
    return (
      <h2 className={css.title}>
        Welcome
      </h2>
    );
  }
}