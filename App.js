import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DictionaryStackScreen from './Routes/DictionaryStack';
import Login from './Screens/Login';
import TabNavScreen from './Routes/TabNavScreen';
import All from './Screens/Lessons/All';
import Translate from './Screens/Translate';
import ScanStack from './Routes/ScanStack';
import AdminStack from './Routes/AdminStack';
import NotLogin from './Screens/NotLogin';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {updateLesson} from './features/lessons';

const Stack = createNativeStackNavigator();

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);
  const appState = useSelector(state => state.appState.value);
  const [userValue, setUserValue] = useState([]);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user_details', jsonValue);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_details');
      if (jsonValue != null) {
        setUserValue(JSON.parse(jsonValue));
      } else {
        setUserValue(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    storeData(storeData({isLoggedin: false, skipLogin: false}));
  }, [appState]);

  useEffect(() => {
    Axios.get('http://10.0.2.2:3001/add-lesson')
      .then(response => {
        dispatch(updateLesson(response.data));
      })
      .catch(e => console.log(e));
  }, [appState]);

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
        <Stack.Screen
          options={{headerShown: false}}
          name="AdminStack"
          component={AdminStack}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
