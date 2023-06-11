import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  padding: 5px;
  background-color: rgb(166, 224, 245);
`;
const Month = styled.h2`
  text-align: center;
`;
const Tables = styled.table`
  margin: auto;
`;
const TableHead = styled.thead``;
const TableHeading = styled.th`
  border: 1px solid gray;
  padding: 5px;
  color: red;
`;
const TableBody = styled.tbody``;
const TableRow = styled.tr``;
const TableData = styled.td`
  border: 1px solid gray;
  padding: 10px;
  color: teal;
`;
const Button = styled.button`
  background-color: rgb(166, 224, 245);
  color: green;
  outline: none;
  border: 1px solid gray;
  padding: 5px;
`;
const TableFoot = styled.tfoot``;
const Input = styled.input`
  border: none;
  color: blue;
  background-color: rgb(166, 224, 245);
  outline: none;
`;

function Table() {
  const [data, setData] = useState([
    { heading: "Onboarding Call", value1: "Value 1", value2: "Value 2" },
    {
      heading: "Google Search Console Access",
      value1: "Value 1",
      value2: "Value 2",
    },
    {
      heading: "Googlr Analytics Access",
      value1: "Value 1",
      value2: "Value 2",
    },
    { heading: "Website Access", value1: "Value 1", value2: "Value 2" },
    { heading: "Technical Audit", value1: "Value 1", value2: "Value 2" },
    {
      heading: "Anchor  text/ URL Mapping",
      value1: "Value 1",
      value2: "Value 2",
    },
    {
      heading: "Google Data Studio Report + Local Reporting Suite",
      value1: "Value 1",
      value2: "Value 2",
    },
    { heading: "Site Page Optimization", value1: "Value 1", value2: "Value 2" },
    { heading: "On Page Optimization", value1: "Value 1", value2: "Value 2" },
    { heading: "Content Creation", value1: "Value 1", value2: "Value 2" },
    { heading: "Content Publishing", value1: "Value 1", value2: "Value 2" },
    { heading: "Premium Press Release", value1: "Value 1", value2: "Value 2" },
    {
      heading: "Authority Niche Placements",
      value1: "Value 1",
      value2: "Value 2",
    },
    { heading: " Index Links ", value1: "Value 1", value2: "Value 2" },
    { heading: "Video Recap ", value1: "Value 1", value2: "Value 2" },

    
  ]);

  const handleChange1 = (index, newValue) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].value1 = newValue;
      return newData;
    });
  };
  const handleChange2 = (index, newValue) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].value2 = newValue;
      return newData;
    });
  };

  const handleSave = () => {
    // Send the updated values to the backend system
    // Replace this with your actual backend request
    fetch("your-backend-url", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response from backend:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container>
      <Month>Month 1</Month>
      <Tables>
        <TableHead>
          <TableRow>
            <TableHeading>Heading</TableHeading>
            <TableHeading>Value 1</TableHeading>
            <TableHeading>Value 2</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableData>{item.heading}</TableData>
              <TableData>
                <Input
                  type="text"
                  value={item.value1}
                  onChange={(e) => handleChange1(index, e.target.value)}
                />
              </TableData>
              <TableData>
                <Input
                  type="text"
                  value={item.value2}
                  onChange={(e) => handleChange2(index, e.target.value)}
                />
              </TableData>
            </TableRow>
          ))}
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableData colSpan="3">
              <Button onClick={handleSave}>Save</Button>
            </TableData>
          </TableRow>
        </TableFoot>
      </Tables>
    </Container>
  );
}

export default Table;
