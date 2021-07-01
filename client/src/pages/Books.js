import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Search from '../components/Search';
import { List, ListItem } from '../components/List';
import API from '../utils/API';

function Books() {
  const [books, setBooks] = useState([]);

  function getBook(bookData) {
    console.log('getbooks called');
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image:
        bookData.volumeInfo.imageLinks?.smallThumbnail ||
        'https://books.google.com/googlebooks/images/no_cover_thumb.gif',
      link: bookData.volumeInfo.previewLink,
    };
  }

  function bookSearch(query) {
    API.searchBooks(query)
      .then((res) => {
        console.log(res);
        setBooks(res.items.map((bookData) => getBook(bookData)));
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Search bookSearch={bookSearch} style={{ marginBottom: 30 }} />
      <Container>
        {books.length ? (
          <List books={books}>
            {books.map((book, index) => (
              <ListItem
                key={book._id}
                index={index}
                title={book.title}
                authors={book.authors}
                link={book.link}
                description={book.description}
                image={book.image}
              ></ListItem>
            ))}
          </List>
        ) : (
          <Header style={{ paddingTop: 30 }} as='h3'>
            Search for a book to begin!
          </Header>
        )}
      </Container>
    </>
  );
}

export default Books;
