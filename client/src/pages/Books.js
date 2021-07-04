import React, { useEffect, useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Search from '../components/Search';
import { List, ListItem } from '../components/List';
import API from '../utils/API';

function Books() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    title: '',
    authors: [],
    description: '',
    link: '',
    image: '',
  });

  function getBooks(bookData) {
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
        setBooks(res.items.map((bookData) => getBooks(bookData)));
      })
      .catch((err) => console.error(err));
  }

  useEffect(
    (index) => {
      setBook(index);
      console.log('effect used book', book);
      console.log('effect used books', books);
    },
    [book, books]
  );

  function handleSave(index) {
    API.saveBook({
      id: books[index].id,
      title: books[index].title,
      authors: books[index].authors,
      description: books[index].description,
      link: books[index].link,
      image: books[index].image,
    })
      .then((res) => {
        console.log(book);
        console.log(books);
        // setBook(book);
        //   });
      })
      .catch((err) => console.log(err.res));
  }

  return (
    <>
      <Search bookSearch={bookSearch} style={{ marginBottom: 30 }} />
      <Container>
        {books.length ? (
          <List books={books}>
            {books.map((book, index) => (
              <ListItem
                handleSave={handleSave}
                key={index}
                id={book._id}
                index={index}
                title={book.title}
                authors={book.authors}
                description={book.description}
                link={book.link}
                image={book.image}
                book={book}
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
