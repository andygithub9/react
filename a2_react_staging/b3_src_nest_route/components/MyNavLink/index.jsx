import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeClassName='navlink-demo'
        className='list-group-item'
        // 批量接收 props {...this.props}
        {...this.props}
      />
    );
  }
}
