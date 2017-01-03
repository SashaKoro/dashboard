import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { selectGadget } from '../actions/index';
import { bindActionCreators } from 'redux';

const Div = styled.div`
  background-color: #DE9C9C;
  float: left;
  height: 94vh;
  width: 15%;
`;

class GadgetList extends Component {
  renderList(){
    return this.props.gadgets.map((gadget) => {
      return (
        <li
          onClick={() => this.props.selectGadget(gadget)}
          key={gadget.gadget}>
          {gadget.gadget}
        </li>
      );
    });
  }

  render() {
    return (
      <Div>
        <ul>
         {this.renderList()}
       </ul>
      </Div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gadgets: state.gadgets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGadget: selectGadget }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GadgetList);
