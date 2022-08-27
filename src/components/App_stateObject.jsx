
// import React from "react";

// class App extends React.Component {

//     // constructor (props){                 // property declare er old way
//     //     super(props)
//     //     this.count = 0
//     // }

//     count = 0                               // property declare er new way

//     render(){
//         // console.log(this.count)
//         return (
//             <div className="App">
//                 <h1> why do we need state </h1>
//                 <p> Count : {this.count}</p>
//                 <button onClick={()=>{
//                     {this.count++}
//                     console.log('clicked ... ', this.count) // count update hobe but represent layer e view change hobe na.. aijonnoi state use korte hobe
//                 } }> ADD + 1</button>
//             </div>
            
//         )
//     }
// }

// export default App;



                    //************ */ use of state ************

// import React from "react";

// class App extends React.Component {

//     // constructor (props){                 // state object declare er old way
//     //     super(props)
//     //     this.count = 0
//     //     this.state = {
//     //         count: 0
//     //     }
//     // }

//     state = {
//         count:0
//     }                             // property declare er new way

//     render(){
//         // console.log(this.count)
//         return (
//             <div className="App">
//                 <h1> why do we need state </h1>
//                 <p> Count : {this.state.count}</p>
//                 <button onClick={()=>{
//                     // {this.count++}
//                     this.setState({count: this.state.count + 1})  // setState method  diye  object akare count update
//                     console.log('clicked ... ', this.state.count) //  value vul ashbe cz ata asynchronous  Prob (1)
//                 } }> ADD + 1</button>
//             </div>
            
//         )
//     }
// }

// export default App;




            // ******** State update by cb function in setState method*******
import React from "react";

class App extends React.Component {

    state = {
        count:0,
        lotOfProperties: {}
    }                           

    render(){
        // console.log(this.count)
        return (
            <div className="App">
                <h1> why do we need state </h1>
                <p> Count : {this.state.count}</p>
                <button onClick= { ()=> {
                    // {this.count++}
                    this.setState((prev) => {               // prev = state
                        return {
                            count: prev.count+1
                        }
                    }, () => {                  // asyncronous handle korte 2nd parameter e cb er  moddhe console kora hoise.. Prob (1) solution
                        console.log('clicked ... ', this.state.count)
                    }) 
                        
                } }> ADD + 1</button>
            </div>
            
        )
    }
}

export default App;