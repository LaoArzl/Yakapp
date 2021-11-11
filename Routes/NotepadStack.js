import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notepad from '../Screens/Notepad/Notepad';
import Content from '../Screens/Notepad/Content';
const Stack = createNativeStackNavigator();

const NotepadStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Notepad" component={Notepad} />
        <Stack.Screen name="Content" component={Content} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NotepadStack;
