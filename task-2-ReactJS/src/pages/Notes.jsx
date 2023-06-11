import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { MdDelete } from "react-icons/md";
const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
  height: 500px;
`;
const NotesContainer = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;
const Input = styled.input`
  outline: none;
  padding: 12px 10px 12px 10px;
  border-radius: 5px;
  border: 1px solid pink;
  color: teal;
  width: 180px;
  text-align: center;
`;
const Text = styled.textarea`
  padding: 5px;

  outline: none;
  border: 1px solid pink;
  border-radius: 5px;
  text-align: center;
  width: 300px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
`;
const Button = styled.button`
  background-color: #fff;
  height: 42px;
  border: 1px solid pink;
  color: green;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

const NoteDetails = styled.div`
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  gap : 50px;
`;

const Wrapper = styled.div`
  border: 1px solid gray;
  width: 200px;
  padding: 2px 5px 15px 25px;
  border-radius: 8px;
  background-color: rgb(105, 245, 245);
 
 
`;
const Title = styled.h3`
  color: blue;
`;
const Content = styled.p``;
const CurrDate = styled.span`
  color: gray;
`;

export const Notes = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [flag , setFlag] = useState(false)
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });
  console.log(allNotes);
  const handleChange = (event) => {
    setNotes({
      ...notes,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:4005/api/addNote", notes);
      if (res) {
        alert("Successfully created note");
        setFlag(!flag)
      }
    } catch (error) {
      alert(` Error : ${error.response.data.error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `http://localhost:4005/api/deleteNote/${id}`
      );
      if (res) {
        alert("Successfully deleted note");
        setFlag(!flag)
      }
    } catch (error) {
      alert(` Error : ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    const getNotes = async () => {
      try {
        let response = await axios.get("http://localhost:4005/api/getAllNotes");
        if (response) {
          setAllNotes(response.data);
        }
      } catch (error) {
        alert(` Error : ${error.response.data.error}`);
      }
    };
    getNotes();
  }, [flag]);

  return (
    <Container>
      <NotesContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="Type the Title"
            name="title"
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <Text
            type="text"
            placeholder="Your Content"
            name="content"
            onChange={handleChange}
          />
        </InputContainer>
        <Button type="submit">Create Note</Button>
      </NotesContainer>

      <NoteDetails>
        {allNotes.map((item) => (
          <Wrapper key={item.id} item={item}>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
            <CurrDate>{item.createdAt}</CurrDate>
            <br />
            <MdDelete
              onClick={() => handleDelete(item.id)}
              style={{ color: "red", paddingTop: "5px", fontSize: "23px" }}
            />
          </Wrapper>
        ))}
      </NoteDetails>
    </Container>
  );
};
