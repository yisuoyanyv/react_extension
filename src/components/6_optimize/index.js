import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {

    state = {carName:"奔驰c36"}

    changeCar=()=>{
        this.setState({carName:'迈巴赫'})
        // this.setState({})
    }
   /*  shouldComponentUpdate(nextProps,nextState){
        // console.log(this.props,this.state)//目前的props和state
        // console.log(nextProps,nextState) //接下来变化的props,目标state
        if(this.state.carName === nextState.carName ) return false
        else   return true
    } */
    
    render() {
        console.log('parent--render')
        const {carName} =this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是{carName}</span>
                <br/>
                <button onClick={this.changeCar}>点我换车</button>
                <Child  carName="奥利" />
            </div>
        )
    }
}


class Child extends PureComponent {

  /*   shouldComponentUpdate(nextProps,nextState){
        console.log(this.props,this.state)//目前的props和state
        console.log(nextProps,nextState) //接下来变化的props,目标state
        if(this.props.carName === nextProps.carName ) return false
        else   return true
    } */

    render() {
        console.log('child--render')

        return (
            <div className="child">
                <h3>我是Child组件</h3>
                {/* <span>我接到的车是：{this.props.carName}</span> */}

            </div>
        )
    }
}
