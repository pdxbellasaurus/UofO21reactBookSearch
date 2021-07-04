import React from 'react';
import { Menu } from 'semantic-ui-react';

function Nav() {
  return (
    <Menu pointing secondary>
      <Menu.Item icon='search' name='search' href='/' />
      <Menu.Item icon='book' name='saved' href='/saved' />
    </Menu>
  );
}

export default Nav;
