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

  const mergeUsers = async () => {
    try {
      //save first user
      await AsyncStorage.mergeItem('note', JSON.stringify({title, body}));

      await AsyncStorage.mergeItem('note', JSON.stringify({title, body}));
    } catch (e) {}

    console.log('ok');
  };
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderBack
          nav={navigation}
          backgroundColor="#fff"
          title="Create Note"
        />
        <ScrollView>
          <View style={{paddingHorizontal: 20}}>
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
