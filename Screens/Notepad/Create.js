import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Create = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [now, setNow] = useState('');

  let date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM ' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let dateNow =
    monthNames[date.getMonth()] +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear();
  const mergeUsers = async () => {
    try {
      //save first user
      await AsyncStorage.mergeItem('note', JSON.stringify({title, body}));

      await AsyncStorage.mergeItem('note', JSON.stringify({title, body}));
    } catch (e) {}
  };
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderBack
          title="Create Note"
          nav={navigation}
          backgroundColor="#fff"
        />
        <ScrollView>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'grey',
                fontSize: 12,
              }}>
              {strTime + ', ' + dateNow}
            </Text>
            <TextInput
              onChangeText={text => setTitle(text)}
              value={title}
              mode="outlined"
              outlineColor="#d3d3d3"
              style={{
                backgroundColor: '#f8f8f8',
                marginBottom: 15,
              }}
              label="Title"
            />

            <TextInput
              onChangeText={text => setBody(text)}
              value={body}
              label="Body"
              mode="outlined"
              multiline={true}
              numberOfLines={15}
              outlineColor="#d3d3d3"
              style={{
                backgroundColor: '#f8f8f8',
                marginBottom: 20,
                padding: 0,
              }}
            />
          </View>

          <View
            style={{
              height: 'auto',
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => mergeUsers()}
              style={{
                backgroundColor: '#407BFF',
                height: 45,
                width: '100%',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Semibold',
                  color: '#fff',
                  fontSize: 16,
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Create;
