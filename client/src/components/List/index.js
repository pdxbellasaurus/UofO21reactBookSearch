import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Icon, Item, Popup } from 'semantic-ui-react';

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
  handleSave,
  id,
  index,
  books,
}) {
  // const [disable, setSaved] = useState(false);
  const location = useLocation();
  return (
    <Item>
      <Item.Image size='small' verticalAlign='middle' src={image} />
      <Item.Content>
        <Item.Extra>
          <Button.Group floated='right'>
            <Button color='blue' size='tiny' href={link}>
              <Icon name='external alternate' />
              View
            </Button>
            {location.pathname === '/api/books' ? (
              <Button
                color='red'
                size='tiny'
                id={id}
                onClick={() => {
                  deleteBook(id);
                }}
              >
                <Icon name='remove' />
                Remove
              </Button>
            ) : (
              <Popup
                trigger={
                  <Button
                    color='green'
                    icon='save'
                    content='Save'
                    id={id}
                    index={index}
                    books={books}
                    onClick={() => {
                      handleSave(index);
                    }}
                  />
                }
                content={
                  <Button color='orange' content='Book has been saved to your list' />
                }
                on='click'
                position='top right'
              />
            )}
          </Button.Group>
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
