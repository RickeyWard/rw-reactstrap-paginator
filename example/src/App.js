import React, { Component } from 'react'

import Paginator from 'rw-reactstrap-paginator'

export default class App extends Component {
  state = {
    curPage: 1,
    itemsTotal: 1000,
    itemsPerPage: 50
  }
  render () {
    return (
      <div>
        <h1 className="text-center">rw-reactstrap-paginator</h1>
        <hr/>
        <Paginator
          curPage={this.state.curPage}
          itemsTotal={this.state.itemsTotal}
          itemsPerPage={this.state.itemsPerPage}
          pagesToDisplay={5}
          size="lg"
          onChange={(newPage)=>{this.setState({curPage: newPage})}} />
      </div>
    )
  }
}
