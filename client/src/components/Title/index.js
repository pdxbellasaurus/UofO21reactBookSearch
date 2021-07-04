import React from 'react';

import { useLocation } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

export default function Title ({ children }) {
  
  const location = useLocation();
return(
<>
      <div>
        <Header
          as='h1'
          icon='book'
          style={{ backgroundColor: '', paddingTop: 30 }}
          color='blue'
          content='GOOGLE BOOK SEARCH'
        />
        {location.pathname !== '/api/books' ? (
          
          <Header.Subheader as='h3'>
            Search for books and save those of interest to your list.
          </Header.Subheader>
          ) : (
          <Header.Subheader as='h3'>Your saved book list:</Header.Subheader>
           ) }
      </div>
      {children}
    </>
);
}