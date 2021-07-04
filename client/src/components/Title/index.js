import React from 'react';
import { Header } from 'semantic-ui-react';

function Title({ children }) {
  return (
    <>
      <Header
        as='h1'
        icon='book'
        style={{ backgroundColor: '', paddingTop: 30 }}
        color='blue'
        content='GOOGLE BOOK SEARCH'
      />
      <Header.Subheader as='h3'>
        Search for books and save those of interest to your list.
      </Header.Subheader>
      {children}
    </>
  );
}
export default Title;
