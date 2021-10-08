import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Scan from '../Screens/Scan';
import Translate from '../Screens/Translate';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={Home}
      />
      {/* <HomeStack.Screen
      name="DictionaryScreen"
      component={DictionaryStackScreen}
    /> */}
      <HomeStack.Screen name="Scan" component={Scan} />
      <HomeStack.Screen name="Translate" component={Translate} />
      {/* <HomeStack.Screen name="Profile" component={ProfileStackScreen} />
      <HomeStack.Screen name="BeginnerScreen" component={BeginnerStackScreen} />
      <HomeStack.Screen
        name="IntermediateScreen"
        component={IntermediateStackScreen}
      />
      <HomeStack.Screen name="AdvanceScreen" component={AdvanceStackScreen} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
