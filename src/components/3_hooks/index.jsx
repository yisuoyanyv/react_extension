import React, { Component } from 'react'
import reactDOM from 'react-dom'

//类式组件
 /* class Demo extends Component {
    state = {count:0}

    myRef = React.createRef()

    add=()=>{
        this.setState(state=>({count:state.count+1}))
    }

    componentDidMount(){
       this.timer = setInterval(()=>{
            this.setState(state=>({count:state.count+1}))
        },1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    unmount=()=>{
        reactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    show =()=>{
        alert(this.myRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text"  ref={this.myRef} />
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>点我提示数据</button>
            </div>
        )
    }
}
 */


function Demo(){
    // console.log('Demo')
    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()  //专人专用

    React.useEffect(()=>{
        console.log('@@')
        let timer =  setInterval(()=>{
            setCount(count=>count+1)
        },1000)

        return ()=>{
            clearInterval(timer)
        }
      
    },[])
    //加的回调
    function add(){
        // setCount(count+1) //第一种写法
        setCount(count=>count+1)  //第二张写法
    }

     //卸载组件的回调
     function unmount(){
        reactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show(){
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type="text"  ref={myRef} />
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo
