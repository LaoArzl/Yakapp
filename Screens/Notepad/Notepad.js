import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Notepad = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#407BFF" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderBack
          nav={navigation}
          title="Notepad"
          background="#407BFF"
          color="#fff"
        />
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Content')}
            style={{
              width: '100%',
              height: 60,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: '#d3d3d3',
                width: '13%',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 38,
              }}>
              <MaterialIcons
                style={{position: 'absolute', right: -6}}
                name="circle"
                size={10}
                color="#407BFF"
              />
              <Text style={{fontSize: 10, fontFamily: 'Popppins-Regular'}}>
                3/21
              </Text>
            </View>
            <View
              style={{
                width: '82%',
                //   borderBottomWidth: 0.5,
                //   borderRightColor: '#d3d3d3',
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Medium', color: '#272727'}}>
                sds
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              height: 60,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: '#d3d3d3',
                width: '13%',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 38,
              }}>
              <MaterialIcons
                style={{position: 'absolute', right: -6}}
                name="circle"
                size={10}
                color="#407BFF"
              />
              <Text style={{fontSize: 10, fontFamily: 'Popppins-Regular'}}>
                3/21
              </Text>
            </View>
            <View
              style={{
                width: '82%',
                //   borderBottomWidth: 0.5,
                //   borderRightColor: '#d3d3d3',
                justifyContent: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Medium', color: '#272727'}}>
                Entry number 2
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Notepad;
