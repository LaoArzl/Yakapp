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
      <StatusBar backgroundColor="#407BFF" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderBack
          nav={navigation}
          title="Notes"
          background="#407BFF"
          color="#fff"
        />
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Content')}
            style={{
              width: '100%',
              height: 60,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: '#d3d3d3',
                width: '13%',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 38,
              }}>
              <MaterialIcons
                style={{position: 'absolute', right: -6}}
                name="circle"
                size={10}
                color="#407BFF"
              />
              <Text style={{fontSize: 10, fontFamily: 'Popppins-Regular'}}>
                3/21
              </Text>
            </View>
            <View
              style={{
                width: '82%',
                //   borderBottomWidth: 0.5,
                //   borderRightColor: '#d3d3d3',
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Medium', color: '#272727'}}>
                sds
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              height: 60,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: '#d3d3d3',
                width: '13%',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 38,
              }}>
              <MaterialIcons
                style={{position: 'absolute', right: -6}}
                name="circle"
                size={10}
                color="#407BFF"
              />
              <Text style={{fontSize: 10, fontFamily: 'Popppins-Regular'}}>
                3/21
              </Text>
            </View>
            <View
              style={{
                width: '82%',
                //   borderBottomWidth: 0.5,
                //   borderRightColor: '#d3d3d3',
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Medium', color: '#272727'}}>
                Entry number 2
              </Text>
            </View>
          </TouchableOpacity>
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
