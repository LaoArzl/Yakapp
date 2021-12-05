import React from 'react';
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';

const Favorites = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderBack nav={navigation} title="Favorites" background="#fff" />
        <ScrollView></ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Favorites;
