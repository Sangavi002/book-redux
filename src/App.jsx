import React from 'react';
import { AddBook } from './components/Addbook';
import { BookList } from './components/BookList';
import {Box,Heading} from "@chakra-ui/react"

function App() {
  return (
      <div className="App">
        <Heading textAlign="center" size="xl" color="tomato" mt="20px" mb="30px">Book Library</Heading>
        <AddBook />
        <BookList />
      </div>
  );
}

export default App;
