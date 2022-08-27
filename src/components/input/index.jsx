// import React from 'react';

// class Inputs extends React.Component {
//   state = {
//     name: '',
//     country: '',
//     bio: '',
//     birthday: '',
//     gender: '',
//     agree: false
//   };

//   handleChange = (event) => {
//     // console.log(event.target.name)
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handdleCheckBox = e => {
//     this.setState({
//       agree: e.target.checked
//     })
//   }


//   render() {
//     const { name, country, bio, birthday, agree } = this.state;   // destructure koreo value set kora jabe way(1)

//     return (

//       <div>
//         <input type="text" onChange={this.handleChange} className="form-control my-2" name="name" placeholder="enter name" value={name} />   {/* way (1) */}

//         <select
//           name="country"
//           className="form-control my-2"
//           onChange={this.handleChange}
//           value={this.state.country}
//         >
//           <option>Select Ur Country</option>
//           <option value="Bangladesh">Bangladesh</option>
//           <option value="India">India</option>
//           <option value="Pakistan">Pakistan</option>
//           <option value="China">China</option>
//         </select>


//         <textarea name="bio" className="form-control my-2" onChange={this.handleChange}
//           placeholder="Tell me about ursels" value={this.state.bio} />

//         <input type="date" name="birthday" onChange={this.handleChange} className="form-control my-2" value={this.state.birthday} />
//         <div>
//           <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male  {/** radio */}
//           <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
//           <input type="radio" name="gender" value="Others" onChange={this.handleChange} /> Others
//         </div>
//         <div>
//           <input type="checkbox" name='agree' checked={agree} onChange={this.handdleCheckBox} 
//           /> I agree to all the terms and conditions
//         </div>

//         <button onClick={() => console.log(this.state)}>
//           Show Data
//         </button>
//       </div>
//     );
//   }
// }

// export default Inputs;





// *****  checkbox and skills array*******
import React from 'react';

class Inputs extends React.Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
    gender: '',
    agree: false,
    skills: []
  };

  handleChange = (event) => {
    // console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  };

  handdleCheckBox = e => {
    this.setState({
      agree: e.target.checked
    })
  }

  handleSkillsChange = event => {
    if(event.target.checked){
      this.setState({
        skills: [...this.state.skills , event.target.value]
      })
    } else {
      const skills = this.state.skills.filter( skill => skill !== event.target.value)
      this.setState({skills})
    }
  }


  render() {
    const { name, agree, skills } = this.state;   // destructure koreo value set kora jabe way(1)

    return (

      <div>
        <input type="text" onChange={this.handleChange} className="form-control my-2" name="name" placeholder="enter name" value={name} />   {/* way (1) */}

        <select
          name="country"
          className="form-control my-2"
          onChange={this.handleChange}
          value={this.state.country}
        >
          <option>Select Ur Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="China">China</option>
        </select>


        <textarea name="bio" className="form-control my-2" onChange={this.handleChange}
          placeholder="Tell me about ursels" value={this.state.bio} />

        <input type="date" name="birthday" onChange={this.handleChange} className="form-control my-2" value={this.state.birthday} />
        <div>
          <input type="radio" name="gender" value="Male" onChange={this.handleChange} /> Male  {/** radio */}
          <input type="radio" name="gender" value="Female" onChange={this.handleChange} /> Female
          <input type="radio" name="gender" value="Others" onChange={this.handleChange} /> Others
        </div>

        <div>
          Skills: <br />
          <input type="checkbox" name="skills" value="Java" checked={skills.includes("Java")} onChange={this.handleSkillsChange} /> Java
          <input type="checkbox" name="skills" value="JavaScript" checked={skills.includes("JavaScript")} onChange={this.handleSkillsChange} /> JavaScript
          <input type="checkbox" name="skills" value="React" checked={skills.includes("React")} onChange={this.handleSkillsChange} /> React
        </div>

        <div>
          <input type="checkbox" name='agree' checked={agree} onChange={this.handdleCheckBox}
          /> I agree to all the terms and conditions
        </div>

        <button onClick={() => console.log(this.state)}>
          Show Data
        </button>
      </div>
    );
  }
}

export default Inputs;
