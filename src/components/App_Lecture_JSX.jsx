// import React from "react";

// const MyCustomComponent = ()=> <h1> custom component  child element hishbe root element e dhukbe and atar first word capital hote hobe</h1>

// class App extends React.Component {
//     render(){                                   // component er method : representation layer : ata jsx return kore .. jsx mane JavaScript er moddhe html : jsx = javascript extention

//         // return <h1> Hello React </h1>;          // jsx mane javascript er syntex sugar ja dekhte html er moto
        
//         // jsx return korar time e kono sibling return kora jabe na.. akta matro element return korte parbo..
//             // akhane only akta element div retrn kora hoise.. h1 and p child elements
//     return (
//         <div className="App">       
//             <h1> React </h1>
//             <p> akdka dakjdjkajk dja </p>
//             <MyCustomComponent />
//         </div>

//     );

//     }
// }

// export default App;


// function myFunctionalComponent (){                  // j func jsx file return kore take functional component bole
//     return <h1> im functional component </h1>               //-- atar shathe component er data layer er kono relation nai
// }


// another way to declare functional component :
// const myFunctionalComponent2 = ()=> {
//     return <h1> i m functional component too </h1>
// }



// atttribute properties use : single attribut thakle inline , multi attribute thakle obj akare newa lagbe

import React from "react";


class App extends React.Component {
    render(){                                  
    
        const obj= {
            title: 'i m h1',
            id: 'myh1'

        };

        const name = 'Hasib'
        const bio = (
            <div>
                
                {/* <h3>Hasib</h3> */}
                <h3>{name}</h3>
                
                <p> learning React </p>
            </div>
        )
        // {} ata diye jsx er jekono jaigai javascript code likha jai but only akta statement likha jai .. exmpl : niche
        return (
            <div className="App">       
                <h1 {...obj}> React </h1>
                <p title=" i am p tag"> akdka dakjdjkajk dja </p>
                <p>{new Date().toLocaleDateString()}</p>
                <p>My name is {name}</p>   
                {bio}         
                
            </div>

        );

    }
}

export default App;


function myFunctionalComponent (){                  // j func jsx file return kore take functional component bole
    return <h1> im functional component </h1>               //-- atar shathe component er data layer er kono relation nai
}