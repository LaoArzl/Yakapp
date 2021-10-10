import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';

const ScanType = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F4F4F4', flex: 1}}>
      <HeaderBack nav={navigation} border title="Scan - OCR" />
    </View>
  );
};

export default ScanType;
