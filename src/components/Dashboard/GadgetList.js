import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  background-color: #DE9C9C;
  float: left;
  height: 94vh;
  width: 15%;
`;

const GadgetList = () => {
  return (
    <Div>
      <ul>
        <li>Weather</li>
        <li>Youtube</li>
        <li>Notes</li>
      </ul>
    </Div>
  );
};

export default GadgetList;


// UNUSED FILE. replaced by gadget-list.js and a whole entire redux implementation
