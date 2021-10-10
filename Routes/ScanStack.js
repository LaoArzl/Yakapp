import React from 'react';
import {View, Text} from 'react-native';
import ScanType from '../Screens/Scan/ScanType';
import ScanGallery from '../Screens/Scan/ScanGallery';
import ScanCamera from '../Screens/Scan/ScanCamera';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ScanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScanType" component={ScanType} />
        <Stack.Screen name="ScanGallery" component={ScanGallery} />
        <Stack.Screen name="ScanCamera" component={ScanCamera} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ScanStack;
