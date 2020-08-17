import React from 'react';

class Time extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date()
        }
    }
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000)
    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        return(
            <div className="digital-clock-cmponent jumbotron">
                {this.state.time.toLocaleString()}
            </div>
        )
    }
}

export default Time