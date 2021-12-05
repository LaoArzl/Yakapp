import React from 'react';
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native';

const Notifications = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            height: 55,
            justifyContent: 'center',
            paddingLeft: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginTop: 4,
              color: '#272727',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
            }}>
            Notifications
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Notifications;
