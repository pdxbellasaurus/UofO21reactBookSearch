import React from 'react';
import { Segment, Label } from 'semantic-ui-react';

export function Footer() {
  return (
    <>
      <Segment color='blue'>
        <Label
          as='a'
          href='https://github.com/pdxbellasaurus'
          color='blue'
          content='Made with ❤ by PDXbellasaurus'
          icon='github'
          ribbon
        ></Label>
      </Segment>
    </>
  );
}
