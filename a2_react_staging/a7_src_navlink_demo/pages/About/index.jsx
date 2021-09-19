import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log(`About 一般組件的 props : `, this.props);
    return (
      <h3>我是 About 的內容</h3>
    )
  }
}
