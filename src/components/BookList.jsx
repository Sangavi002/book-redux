import React, { useState } from 'react';
import { Button, Box,Select, Input } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import "./book.css"

export const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const [filter, setFilter] = useState('All');
  const [editingBook, setEditingBook] = useState(null);
  const dispatch = useDispatch();

  const markAsRead = (id) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
  };

  const deleteBook = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  const handleSave = () => {
    dispatch({
      type: 'EDIt_BOOK',
      payload: { id: editingBook.id, data: editingBook },
    });
    handleCancelEdit();
  };

  const filteredBooks = books.filter(book => {
    if (filter === 'Read') return book.read;
    if (filter === 'Unread') return !book.read;
    return true;
  });

  return (
    <>
      <Select w="15%" placeholder="Filter by status" onChange={(e) => setFilter(e.target.value)} mb={4}>
        <option value="All">All</option>
        <option value="Read">Read</option>
        <option value="Unread">Unread</option>
      </Select>
      <Box display="flex" justifyContent="center">
        <table variant="simple" width="80%">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>
                  {editingBook && editingBook.id === book.id ? (
                    <Input
                      value={editingBook.title}
                      onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                    />
                  ) : (
                    book.title
                  )}
                </td>
                <td>
                  {editingBook && editingBook.id === book.id ? (
                    <Input
                      value={editingBook.author}
                      onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                    />
                  ) : (
                    book.author
                  )}
                </td>
                <td>
                  {editingBook && editingBook.id === book.id ? (
                    <Input
                      value={editingBook.genre}
                      onChange={(e) => setEditingBook({ ...editingBook, genre: e.target.value })}
                    />
                  ) : (
                    book.genre
                  )}
                </td>
                <td>
                  {editingBook && editingBook.id === book.id ? null : (
                    <Button
                      bg={book.read ? "#379777" : "#FFDE4D"}
                      color="white"
                      onClick={() => markAsRead(book.id)}
                    >
                      {book.read ? 'Read' : 'Mark as Read'}
                    </Button>
                  )}
                </td>
                <td>
                  {editingBook && editingBook.id === book.id ? (
                    <>
                      <Box display="flex">
                        <Button colorScheme="teal" onClick={handleSave}>
                          Save
                        </Button>
                        <Button onClick={handleCancelEdit} variant="outline" ml={2}>
                          Cancel
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <Button bg="#8FD14F" color="white" onClick={() => handleEdit(book)}>
                      Edit
                    </Button>
                  )}
                </td>
                <td>
                  <Button bg="#C80036" color="white" onClick={() => deleteBook(book.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};

