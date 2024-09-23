import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Input,Box,Button} from "@chakra-ui/react"

export const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      read: false,
    };
    dispatch({ type: 'ADD_BOOK', payload: newBook });
    setTitle('');
    setAuthor('');
    setGenre('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box w="25%" m="auto" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" p="20px">
        <Input
          mt="10px"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          mt="10px"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <Input
          mt="10px"
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <center>
        <Button type="submit" mt="10px" bg="green" color="white">Add Book</Button>
        </center>
      </Box>
    </form>
  );
};

