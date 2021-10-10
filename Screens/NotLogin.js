import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const NotLogin = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Image
        style={{width: 180, height: 180}}
        source={require('../Assets/account.png')}
      />
      <Text style={{fontFamily: 'Poppins-Regular', marginBottom: 20}}>
        Your are currently not login
      </Text>
      <TouchableOpacity
        onPress={() => props.nav.navigate('Login')}
        style={{
          height: 50,
          backgroundColor: '#407BFF',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          marginBottom: 10,
        }}>
        <Text
          style={{fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#fff'}}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: '#407BFF',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            color: '#407BFF',
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotLogin;
