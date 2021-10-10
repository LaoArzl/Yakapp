import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Searchbar} from 'react-native-paper';

const Dictionary = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <View
        style={{
          height: 60,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#dedede',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: '100%',
            width: '10%',
            justifyContent: 'center',
          }}>
          <Feather name="chevron-left" size={26} color="#272727" />
        </TouchableOpacity>
        <View style={{width: '89%'}}>
          <Searchbar
            iconColor="#407BFF"
            inputStyle={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#272727',
              paddingBottom: 5,
              paddingLeft: 0,
            }}
            style={{
              elevation: 0,
              height: 40,
              backgroundColor: '#eee',
              padding: 0,
              borderRadius: 100,
            }}
            placeholder="Search for a word"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dictionary;
