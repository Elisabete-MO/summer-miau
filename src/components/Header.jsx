import React, { Component } from 'react';

export class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>MIAU</h1>
        <p>{email}</p>
      </div>
    );
  }
}



export default Header;
