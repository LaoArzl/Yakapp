import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = props => {
  return (
    <Appbar
      style={{
        backgroundColor: '#272727',
        marginBottom: 20,
        color: 'red',
      }}>
      <Appbar.Action icon="menu" onPress={() => props.nav.openDrawer()} />
    </Appbar>
  );
};

export default Header;
