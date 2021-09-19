import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息一' },
      { id: '02', title: '消息二' },
      { id: '03', title: '消息三' },
    ],
  };

  render() {
    const {
      state: { messageArr },
    } = this;
    return (
      <div>
        <ul>
          {messageArr.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由傳遞 params 參數, 路由/參數/參數 */}
                <Link
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 聲明接收 params 參數, 路由/:參數/:參數, 在傳遞給路由對應的組件 */}
        <Route path='/home/message/detail/:id/:title' component={Detail} />
      </div>
    );
  }
}
