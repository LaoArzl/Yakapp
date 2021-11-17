import React from 'react';
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Create = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            height: 55,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 20,
            alignItems: 'flex-end',
          }}>
          <FontAwesome5
            onPress={() => navigation.goBack()}
            name="times"
            size={20}
            color="#407BFF"
          />
        </View>
        <ScrollView></ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Create;
