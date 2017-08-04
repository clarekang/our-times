import React, { Component } from 'react';
import { Link } from 'react-router';
import { RaisedButton, Paper } from 'material-ui';
import FireBaseTools from '../models/firebase';

const paperStyle = {
  padding: 30,
  textAlign: 'center',
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    const user = FireBaseTools.user;
    this.state = {
      user: user || null,
    };
    this.signIn = this.signIn.bind(this);
  }
  signIn() {
    FireBaseTools
      .signIn()
      .then((user) => {
        this.setState({
          user,
        });
      });
  }
  render() {
    const { user } = this.state;
    const displayName = user ? user.displayName : 'Unknown';
    return (
      <div style={paperStyle}>
        <h3>Sign In</h3>
        {
          user
            ? <div>
                <h4>Hello, {displayName}!</h4>
                <Link to="/check">
                  <RaisedButton
                    label="Go Check"
                    primary
                  />
                </Link>
              </div>
            : <RaisedButton
                label="Sign In With Google"
                onClick={this.signIn}
                primary
              />
        }
      </div>
    );
  }
}

export default SignIn;
