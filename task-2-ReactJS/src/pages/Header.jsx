import React from "react";
import styled from "styled-components";
import {MdNotes} from 'react-icons/md'
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  align-items : center;
  color : yellow;
  background-color : black;
  border-radius : 8px;
 
`;
const Left = styled.div`
display: flex;
gap : 20px;
align-items : center;

`;
const Right = styled.div``;


export const Header = () => {
  return (
    <Container>
      <Left>
       
        <MdNotes/>
        <p>Notes</p>
      </Left>
      <Right>Bhupendra Namdev</Right>
    </Container>
  );
};
