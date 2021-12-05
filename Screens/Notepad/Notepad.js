import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Searchbar} from 'react-native-paper';

const Notepad = ({navigation}) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('note');
      return jsonValue != null ? setData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({[store[i][0]]: store[i][1]});
          return true;
        });
      });
    });
  }, []);
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderBack nav={navigation} title="Notes" background="#fff" />
        <ScrollView style={{padding: 20, paddingVertical: 10}}>
          <Searchbar
            iconColor="#407BFF"
            autoFocus={true}
            placeholder="Search Notes"
            inputStyle={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#272727',
              paddingBottom: 5,
              paddingLeft: 0,
            }}
            style={{
              height: 40,
              width: '100%',
              borderWidth: 0,
              borderRadius: 100,
              elevation: 0,
              backgroundColor: '#f4f4f4',
            }}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('Create')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: '#407BFF',
            position: 'absolute',
            right: 20,
            bottom: 30,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            elevation: 8,
          }}>
          <SimpleLineIcons name="note" size={20} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Notepad;
