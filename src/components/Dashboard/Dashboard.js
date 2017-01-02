import React, {Component} from 'react';
import styled from 'styled-components';
import GadgetList from './GadgetList';
import GadgetArea from './GadgetArea';

const Div = styled.div`
  padding-top: 60px;
`;

class Dashboard extends Component {
  render() {
    return (
      <Div>
        <GadgetList />
        <GadgetArea />
      </Div>
    );
  }
}

export default Dashboard;
