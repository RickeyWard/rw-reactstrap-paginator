# rw-reactstrap-paginator

> a functional, controlled, pagination component for use with reactstrap

## View it in action here:
[live demo](https://RickeyWard.github.io/rw-reactstrap-paginator)

[![NPM](https://img.shields.io/npm/v/rw-reactstrap-paginator.svg)](https://www.npmjs.com/package/rw-reactstrap-paginator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rw-reactstrap-paginator
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'rw-reactstrap-paginator'

class Example extends Component {
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
```

## License

MIT © [RickeyWard](https://github.com/RickeyWard)
