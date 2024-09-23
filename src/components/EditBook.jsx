import React from 'react';
import { Button, Input, Box, Flex } from '@chakra-ui/react';

export const EditBook = ({ book, onUpdate, onCancel }) => {
  return (
    <Box display="flex" flexDirection="column" width="300px" margin="auto">
      <Flex mb={3}>
        <Input
          placeholder="Title"
          value={book.title}
          onChange={(e) => onUpdate({ ...book, title: e.target.value })}
          required
          mr={2}
        />
      </Flex>
      <Flex mb={3}>
        <Input
          placeholder="Author"
          value={book.author}
          onChange={(e) => onUpdate({ ...book, author: e.target.value })}
          required
          mr={2}
        />
      </Flex>
      <Flex mb={3}>
        <Input
          placeholder="Genre"
          value={book.genre}
          onChange={(e) => onUpdate({ ...book, genre: e.target.value })}
          required
          mr={2}
        />
      </Flex>
      <Button type="button" colorScheme="teal" onClick={() => onUpdate(book)}>
        Save
      </Button>
      <Button type="button" onClick={onCancel} variant="outline">
        Cancel
      </Button>
    </Box>
  );
};


