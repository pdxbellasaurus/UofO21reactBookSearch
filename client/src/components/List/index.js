import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Icon, Item } from 'semantic-ui-react';

export function List({ children }) {
  return (
    <Item.Group
      divided
      style={{
        paddingTop: 30,
      }}
    >
      {children}
    </Item.Group>
  );
}

export function ListItem({
  title,
  authors,
  description,
  image,
  link,
  deleteBook,
  id,
}) {
  const location = useLocation();
  return (
    <Item>
      <Item.Image size='small' verticalAlign='middle' src={image} />
      <Item.Content>
        <Item.Extra>
          <Button color='blue' floated='right' href={link}>
            <Icon name='external alternate' />
            View
          </Button>
          {location.pathname === '/api/books' ? (
            <Button
              color='red'
              floated='right'
              id={id}
              onClick={() => deleteBook(id)}
            >
              <Icon name='remove' />
              Remove
            </Button>
          ) : (
            <Button color='blue' floated='right'>
              <Icon name='save' />
              Save
            </Button>
          )}
        </Item.Extra>
        <Item.Header href={link} name='title' as='a'>
          {title}
        </Item.Header>
        <Item.Meta>
          <span className='author'>{authors}</span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
      </Item.Content>
    </Item>
  );
}
