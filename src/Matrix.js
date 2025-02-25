import React, { Component } from 'react';

export default class Matrix extends Component {

  static defaultProps = {
    values: (new Array(10).fill(new Array(10).fill("#F00")))
  }

  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}