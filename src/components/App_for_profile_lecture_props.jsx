// import React from "react";

// import Profile from "./profile/index"

// class App extends React.Component {
//     render(){                                  
    
//         return (
//             <div >              
//                 <Profile/>
//             </div>

//         );

//     }
// }

// export default App;


// ************* code reuse by props ***********

import React from "react";

import Profile from "./profile/index"
import MyProps from "./props";
import Bio from "./profile/Bio";
import Skills from "./profile/Skills";

class App extends React.Component {
    render(){                                  
    
                                // custom component er attribute kei props bole <MyProps name="Hasib Al Asad" />
        return (
            <div >              
                <Profile/>
                
                <div>
                    <h3> List of Programmer</h3>
                    <p> Mr. X</p>
                    <Skills skillA="ReactJS" skillB = "NodeJS" skillC="Javascript"/>
                    <p> Mr. Y</p>
                    <Skills skillA="MongoDB" skillB = "NodeJS" skillC="ExpressJS"/>
                    <MyProps name="Hasib Al Asad" />       
                    <MyProps name="Abu Talha" />
                </div>
            
            </div>

        );

    }
}

export default App;




                