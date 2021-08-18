import React, { Component,Fragment } from 'react'
// import Demo from './components/1_setState'
// import Demo from './components/2_lazyLoad'
// import Demo from './components/3_hooks'
// import Demo from './components/4_fragment'
import A from './components/5_Context'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <A x={101} />
      </Fragment>
    )
  }
}
