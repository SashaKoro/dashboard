import React, {Proptypes} from 'react';
import {Link, IndexLink} from 'react-router';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #555F61;
  color: black;
  font-size: 20px;
  font-family: Arial;
  height: 60px;
  position: fixed;
  width: 100%;
`;

const Header = () => {
  return (
    <Div>
      <IndexLink to="/" activeClassName="active">Dashboard</IndexLink>
      {" / "}
      <Link to="/signup" activeClassName="active">Signup</Link>
    </Div>
  );
};

export default Header;
