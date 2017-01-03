import React, {Component} from 'react';
import styled from 'styled-components';
//import GadgetList from './GadgetList';
import GadgetArea from '../../containers/gadget-area';
import GadgetList from '../../containers/gadget-list';

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
