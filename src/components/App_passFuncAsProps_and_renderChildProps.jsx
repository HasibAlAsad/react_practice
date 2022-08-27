

// import React from "react";


// class Child extends React.Component{
    
//     render(){
//         this.props.func (this);
//         return <h1 > i am child</h1>
//     }
// }

// class App extends React.Component {

//     getContext(context){
//         console.log(context)
//     }

//     render(){                                  
        
//         this.getContext(this)
//         return (
//             <div className="App">
//                 <h1> Pass function as proms </h1>
//                 <Child func={this.getContext}/>
//             </div>
//         );

//     }
// }

// export default App;




            //********** Rendering children props in React */
            import React from "react";


            const ChildComponent = props => (
                <div>
                    <h3> i am from child component </h3>
                    <p>i dont know what to do </p>
                    {props.children}
                    {/* props.children dewai  ChildComponent e closing tag use kora jabe..  */}
                </div>
            )
            
            class App extends React.Component {
            
                getContext(context){
                    console.log(context)
                }
            
                render(){                                  
                    
                    
                    return (
                        <div className="App">
                            <h1> Pass function as proms </h1>
                            <ChildComponent>
                                <h3>wefrwmef wrfw</h3>
                                <p>mc,zxvn mvxmvx</p>
                            </ChildComponent>
                        </div>
                    );
            
                }
            }
            
            export default App;