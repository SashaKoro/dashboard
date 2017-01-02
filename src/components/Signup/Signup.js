import React, {Component} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding-top: 150px;
  height: 100vh;
  background-color: #D5B489;
`;

const SignupBox = styled.div`
  background-color: gray;
  margin: auto;
  height: 600px;
  width: 450px;
`;

class Signup extends Component {
  render() {
    return (
      <Div>
        <SignupBox>
          <h1>Sign Up</h1>
        </SignupBox>
      </Div>
    );
  }
}

export default Signup;
