// import React,{Component} from "react";

// import classes from './eventHandle/App.module.css';


// class App extends Component {


//     handleButtonClick = (e)=> {
//         console.log(e)
//     }

//     render(){
//         return (
//             <div className={classes.Wrapper}>
//                 <h1 className={classes.Heading}> Events in React </h1>
//                 <button className={classes.Btn} onClick={(e)=> console.log(e.target)} >Click Me</button>  
//                 <button className={classes.Btn} onClick={this.handleButtonClick} >Click Me</button>   {/** App class e Arrow func age theke declare kore handler banaleo hobe */}               
//             </div>
//         )
//     }
// }

// export default App;



        // Two Way data binding : state er value bind kore dissi input field e , jar fole state er value input field e show korbe 
        // -- Abr input er value change korle automatically state er value o change hobe...
        import React, { Component } from "react";

        import classes from './eventHandle/App.module.css';
        
        
        class App extends Component {
        
            state={
                name: ''
            }
        
            handleChange = (e)=> {
                // console.log(e.target.value)
                this.setState({name: e.target.value})
        
            }
        
            handleFocus = event => {
                console.log('i am focus event');
            }
        
            handleBlur = (e)=> {
                if(!this.state.name){
                    alert('plz enter text');
                }
                console.log('i am blur event');
            }
        
            render(){
                return (
                    <div className={classes.Wrapper}>
                        <h1 className={classes.Heading}> Events in React </h1>
                        <input type="text" className={classes.TextField} placeholder="Enter Text" value={this.state.name} 
                        onChange={this.handleChange} onFocus ={this.handleFocus} onBlur={this.handleBlur}/>  {/** handler er func baniye use korte hobe.. akhane func likhle hocche na */}
                        <br />
                        <br />
                        {this.state.name && <h3>Welcome, {this.state.name}</h3>}   {/** conditional rendering : this.state.name er moddhe jokhon
                                                                                            value thakbe porer expression ta render hobe */}
                    </div>
                                                                                                                                     
                )
            }
        }
        
        export default App;