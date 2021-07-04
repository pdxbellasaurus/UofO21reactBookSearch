import React, { useState, useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { List, ListItem } from '../components/List';
import API from '../utils/API';

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      {books.length ? (
        <List books={books}>
          {books.map((book, index) => (
            <ListItem
              deleteBook={deleteBook}
              key={index}
              id={book._id}
              index={index}
              title={book.title}
              authors={book.authors}
              description={book.description}
              link={book.link}
              image={book.image}
            ></ListItem>
          ))}
        </List>
      ) : (
        <Header style={{ paddingTop: 30 }} as='h3'>
          There are no books in your saved list.
        </Header>
      )}
    </Container>
  );
}

export default Saved;
