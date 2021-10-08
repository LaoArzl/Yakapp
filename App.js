import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackScreen from './Routes/HomeStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Settings from './Screens/Settings';
import Scan from './Screens/Scan';
import Profile from './Screens/Profile';
import Notifications from './Screens/Notifications';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#dedede',
          height: 60,
        }}
        // labeled={false}
        activeColor="#407BFF"
        inactiveColor="#BBBBBB">
        <Tab.Screen
          options={{
            tabBarIcon: ({color, focused}) => {
              let iconName = 'md-home';
              return (
                <Ionicons
                  name={iconName}
                  size={focused ? 18 : 22}
                  color={color}
                />
              );
            },
            headerShown: false,
            tabBarLabel: 'Home',
          }}
          name="Home"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, focused}) => {
              let iconName = 'bell';
              return (
                <FontAwesome
                  name={iconName}
                  size={focused ? 18 : 22}
                  color={color}
                />
              );
            },
            headerShown: false,
          }}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, focused}) => {
              let iconName = 'cog';
              return (
                <FontAwesome
                  name={iconName}
                  size={focused ? 18 : 22}
                  color={color}
                />
              );
            },
            headerShown: false,
          }}
          name="Settings"
          component={Settings}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, focused}) => {
              let iconName = 'user-alt';
              return (
                <FontAwesome5
                  name={iconName}
                  size={focused ? 18 : 22}
                  color={color}
                />
              );
            },
            headerShown: false,
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
