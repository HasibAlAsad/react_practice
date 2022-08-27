//              // style using css class name 

// import React from "react";
// // import './button.css'

// const Button = props => <button className="buttonB" {...props}> {props.children} </button>;



// export default Button;



        //style using css module 
import React from "react";
import classes from './button.module.css'               // module use korle aivabe import korte hoi

const Button = props => <button className={classes.button} {...props}> {props.children} </button>;



export default Button;