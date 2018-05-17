import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return '+';
    } else {
      return '-';
      }
    }

  render() {
    return (
<div className="Track">
  <div className="Track-information">
    <h3></h3>
    <p> | </p>
  </div>
  <a className="Track-action">{this.renderAction}</a>
</div>
    );
  }
}



export default Track;
