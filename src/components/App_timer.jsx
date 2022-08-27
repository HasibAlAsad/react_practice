import React from "react";
import "./timer.css"


class App extends React.Component{

    state = {
        count: 0
    }

    intervalId = null 

    incrementTimer = ()=> {
        this.setState({count: this.state.count + 1})
    }

    deccrementTimer = ()=> {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1})
        }
    }

    startTimer = ()=> {
        this.intervalId = setInterval(()=>{
            if(this.state.count > 0 ){
                this.setState({count: this.state.count - 1}, ()=> {
                    if (this.state.count=== 0){
                        alert ("timer finished")
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            }
        },1000)
    }


    stopTimer = ()=> {
        if (this.state.count > 0){
            clearInterval(this.intervalId)
            this.intervalId = null

        }
    }


    resetTimer = ()=> {
        this.setState({count: 0 })
        clearInterval(this.intervalId)
        this.intervalId = null
    }


    render(){
        return (
            <div className="App">
                <h1> Simple timer </h1>
                
                <div className="container">
                    <button className="btn" onClick={this.deccrementTimer}>(-)</button>
                    <span> {this.state.count}  </span>
                    <button className="btn" onClick={this.incrementTimer}>(+)</button>
                </div>
                
                <div className="container">
                    <button className="btn" onClick={this.startTimer}>Start</button>
                    
                    <button className="btn" onClick={this.stopTimer}>Stop</button>
                    
                    <button className="btn" onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        )
    }
}

export default App;

