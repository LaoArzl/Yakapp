import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const HeaderBack = props => {
  return (
    <View
      style={{
        height: 60,
        paddingHorizontal: 20,
        width: '100%',
        borderBottomWidth: props.border === true ? 1 : 0,
        borderBottomColor: '#dedede',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.background ? props.background : '#fff',
      }}>
      <TouchableOpacity
        onPress={() =>
          props.destination
            ? props.nav.navigate(props.destination)
            : props.nav.goBack()
        }
        style={{
          height: '100%',
          width: '10%',
          justifyContent: 'center',
        }}>
        <Feather name="chevron-left" size={26} color="#272727" />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: 15,
          marginTop: 4,
          color: '#272727',
          fontFamily: 'Poppins-Medium',
          fontSize: 18,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default HeaderBack;
