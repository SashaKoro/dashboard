import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Div = styled.div`
  padding-top: 100px;
  background-color: #9CC0AE;
  height: 94vh;
`;

class GadgetArea extends Component {
  render() {
    if(!this.props.gadget) {
      return <Div>PICK A GADGET</Div>
    }

    return (
      <Div>
        <h3>Details for:</h3>
        <div>{this.props.gadget.gadget}</div>
        <div>{this.props.gadget.website}</div>
      </Div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gadget: state.activeGadget
  };
}

export default connect(mapStateToProps)(GadgetArea);
