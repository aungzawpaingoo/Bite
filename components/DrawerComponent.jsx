import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { Drawer } from 'react-native-paper';

const DrawerComponent = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default Drawer;

const styles = StyleSheet.create({})