//         // style using css class name 
// import React from "react";
// import BoxA from "./Style_lecrture/box_a";
// import BoxB from "./Style_lecrture/box_b";
// import Button from "./Style_lecrture/button";
// import './Style_lecrture/App.css'
// import './Style_lecrture/button.css'

// const myHeader = {
//     color: 'blue',
//     fontFamily: 'Arial',
//     fontSize: '36px'
// }
// class App extends React.Component {

//     render(){
//         return (
//             <div>
//                 <h1 style={{
//                             color: 'red',
//                             fontFamily: 'Arial',
//                             fontSize: '36px'
//                             }
//                     }> inline css lecture</h1>

//                 <h2 style={myHeader}> another heading</h2>
//                 <Button> Click Me </Button>     {/* component  button */}
//                 <BoxA/>
//                 <BoxB/>
//                 <button className="button"> Another </button>
//             </div>
//         )
//     }
// }


// export default App;



        // style using css module 
        import React from "react";
        import BoxA from "./Style_lecrture/box_a";
        import BoxB from "./Style_lecrture/box_b";
        import Button from "./Style_lecrture/button";
        import './Style_lecrture/App.css'
        // import './Style_lecrture/button.module.css'
        
        const myHeader = {
            color: 'blue',
            fontFamily: 'Arial',
            fontSize: '36px'
        }
        class App extends React.Component {
        
            render(){
                return (
                    <div>
                        <h1 style={{
                                    color: 'red',
                                    fontFamily: 'Arial',
                                    fontSize: '36px'
                                    }
                            }> inline css lecture</h1>
        
                        <h2 style={myHeader}> another heading</h2>
                        <Button> Click Me </Button>     {/* component  button */}
                        <BoxA/>
                        <BoxB/>
                        <button className="button"> Another </button>
                    </div>
                )
            }
        }
        
        
        export default App;