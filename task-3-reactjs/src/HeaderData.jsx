import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";

const Container = styled.div`
  border: 1px solid red;

  padding: 20px;
`;

const Title = styled.h3`
  color: blue;
`;
const Details = styled.div``;
const List = styled.p`
  color: green;
`;
const PhoneNumber = styled.input`
  padding: 5px;
  margin-left: 10px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;
const Submit = styled.button`
  margin-left: 30px;
  padding: 5px;
  background-color: #fff;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;
const Label = styled.label`
  color: teal;
  font-size: 23px;
`;

export const HeaderData = () => {
  const [header, setHeader] = useState("");
  const [number, setNumber] = useState({
    Phone: "",
  });

  const handleHeaderData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/getData/${number.Phone}`
      );

      setHeader(response.data.data);
    } catch (err) {
      alert(err.error);
    }
  };

  const handlechange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };
  console.log(header);
  return (
    <Container>
      <Title>Header Data</Title>
      <hr />
      <Label>Enter Phone Number :</Label>
      <PhoneNumber type="number" name="Phone" onChange={handlechange} />
      <Submit onClick={handleHeaderData}>Submit now</Submit>
      {header && (
        <Details>
          <List>connection : {header?.connection}</List>
          <List>content-length : {header["content-length"]}</List>
          <List>content-type : {header["content-type"]}</List>
          <List>date : {header?.date}</List>
          <List>phoneorigen : {header?.phoneorigen}</List>

          <List>server : {header?.server}</List>
          <List>vary : {header?.vary}</List>
        </Details>
      )}
    </Container>
  );
};
