import React from 'react';
import classes from './eventHandle/App.module.css';

// import Uncontrolled from './form and sign up/uncontrolledForm';
// import ControlledForm from './form and sign up/controlledForm';

// import SplitForm from './form and sign up/split form/splitForm';

import SignUp from './stateLifting/signUp'


class App extends React.Component {

  state = {
    users: []
  }

  createUser = user => {
    user.id = new Date().getTime().toString()
    this.setState({
      users: [...this.state.users , user]
    })
  }

  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}> Sign up form </h1>
        <hr />
        {/* <Uncontrolled/> */}
        {/* <ControlledForm/> */}
        {/* <SplitForm/> */}
        <SignUp createUser={this.createUser} />

        <div>
          
          <h3 className='my-5'> All Registered Users</h3>
          
          <ul className='list-group'>
            {this.state.users.map(user => (
              <li key={user.id} className="list-group-item">
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;