// import React from "react";
// import "./profile.style.css";


// class Profile extends React.Component{

//     render(){
//         return (
//             <div className='Container'>
//                 <div className="Bio">
//                     <h3>Hasib Al Asad</h3>
//                     <p> frontend developer</p>
//                 </div>
//                 <div className="Skills">
//                     <h3> Skills :</h3>
//                     <ul>
//                         <li> Java</li>
//                         <li> JavaScript</li>
//                         <li> C </li>
//                     </ul>
//                 </div>
//                 <div className="Link">
//                     <h3>Social Links :</h3>
//                     <ul>
//                         <li><a href="#">Facebook</a></li>
//                         <li><a href="#">Github</a></li>
//                         <li><a href="#">Linkdin</a></li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Profile





// ********** split profile component into multiple child component*******
import React from "react";
import "./profile.style.css";

import Bio from "./Bio";
import Skills from "./Skills";
import Link from "./Link";


class Profile extends React.Component{

    me = {
        name: 'Hasib Al Asad',
        title: 'Frontend developer',
        skillA: 'C programmig',
        skillB: 'Java',
        skillC: 'JavaScript'
        
    }

    render(){
        // console.log('Profile - ',this.props)   // jekono class based component e this.props ta true.. functonal component e parameter hishebe props dewa hoi baire theke
        return (
            <div className='Container'>
                {/* <Bio name="Hasib Al Asad" title="Frontend developer"/> */}
                <Bio name = {this.me.name} title= {this.me.title} />
                {/* <Skills skillA="C programming" skillB = "Java" skillC="Javascript"/> */}
                < Skills skillA = {this.me.skillA} skillB = {this.me.skillB} skillC = {this.me.skillC}/>
                <Link/>
            </div>
        )
    }
}

export default Profile;

