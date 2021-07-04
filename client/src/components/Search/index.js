import React, { useState } from 'react';
import { Container, Form } from 'semantic-ui-react';

function Search(props) {
  const [search, setSearch] = useState('');

  function handleInputChange(event) {
    const book = event.target.value;
    setSearch(book);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props.bookSearch(search);
    setSearch('');
  }

  return (
    <Container>
      <Form
        onSubmit={handleFormSubmit}
        style={{
          backgroundPosition: 'bottom',
          backgroundImage:
            'url(https://specials-images.forbesimg.com/imageserve/1126130554/960x0.jpg?cropX1=0&cropX2=5472&cropY1=547&cropY2=3625)',
          padding: 50,
        }}
      >
        <Form.Group>
          <Form.Input
            focus
            placeholder='Search...'
            value={search}
            type='text'
            name='search'
            color='blue'
            onChange={handleInputChange}
          />
          <Form.Button
            icon='search'
            type='submit'
            content='Search'
            color='blue'
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Search;
