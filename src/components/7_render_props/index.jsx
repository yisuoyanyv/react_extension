import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是parent组件</h3>
                <A render={(name)=><B name={name}/>}/>
                   
                
            </div>
        )
    }
}


class A extends Component {
    state = {name:'tom'}

    render() {
        console.log(this.props)
        const {name} = this.state
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {this.props.render(name)}
                {/* <B  name={this.state.name}/> */}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="b" >
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
}
