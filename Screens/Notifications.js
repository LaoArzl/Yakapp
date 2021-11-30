import React from 'react';
import {View, Text} from 'react-native';

const Notifications = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{height: 55, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            marginTop: 4,
            color: '#272727',
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
          }}>
          Notifications
        </Text>
      </View>
    </View>
  );
};

export default Notifications;
