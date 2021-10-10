import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DictionaryStackScreen from './Routes/DictionaryStack';
import Login from './Screens/Login';
import TabNavScreen from './Routes/TabNavScreen';
import All from './Screens/Lessons/All';
import Translate from './Screens/Translate';
import ScanStack from './Routes/ScanStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="TabScreen"
          component={TabNavScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DictionaryStackScreen"
          component={DictionaryStackScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="All"
          component={All}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Translate"
          component={Translate}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ScanStack"
          component={ScanStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
