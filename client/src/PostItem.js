import React, { Component } from 'react'

export default class PostItem extends Component {
  render() {
      const { jimmyBigBallocks, toilet } = this.props;
    return (
      <li>{jimmyBigBallocks} {toilet}</li>
    )
  }
}
