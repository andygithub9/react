import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default class List extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired,
    isFirst: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,

    // 限制接收多種類型
    // isError 可以是 object 類型或者是 bool 類型
    isError: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired
    ])
  }

  render() {
    const { users, isFirst, isLoading, isError } = this.props;
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
