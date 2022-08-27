// import React from "react";

// const Bio = ()=> (
//     <div className="Bio">
//         <h3>Hasib Al Asad</h3>
//         <p> frontend developer</p>
//     </div>
// )

// export default Bio;



// reuse using props 
import React from "react";

const Bio = (props)=> (
    <div className="Bio">
        <h3>{props.name}</h3>
        <p> {props.title} </p>
    </div>
)

export default Bio;