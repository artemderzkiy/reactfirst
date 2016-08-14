

import React, { Component } from 'react';

export default class Toolbar extends Component {
 

  render() {
    return (
      <div>
       <span className="glyphicon glyphicon-arrow-up" onClick={() => this.sort('name')}></span>
       
      </div>
    )
  }
}