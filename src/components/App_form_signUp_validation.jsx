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
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}> Sign up form </h1>
        <hr />
        {/* <Uncontrolled/> */}
        {/* <ControlledForm/> */}
        {/* <SplitForm/> */}
        <SignUp />

      </div>
    );
  }
}

export default App;