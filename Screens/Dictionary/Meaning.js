import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const Meaning = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <LinearGradient
        colors={['#407BFF', '#40C6FF']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 0.0}}
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '10%',
            position: 'absolute',
            left: 20,
          }}>
          <Feather name="chevron-left" size={26} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={['#407BFF', '#40C6FF']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 0.0}}
        style={{
          width: '100%',
          height: 100,
          overflow: 'hidden',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 30,
              textTransform: 'capitalize',
              color: '#fff',
            }}>
            {item.name}
            <Text style={{marginRight: 10}}> </Text>
          </Text>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#55555C',
              marginBottom: 40,
              fontSize: 16,
            }}>
            {item.meaning}
          </Text>

          <Text
            style={{
              color: '#272727',
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              marginBottom: 5,
            }}>
            English
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#55555C',
              marginBottom: 40,
              fontSize: 16,
              textTransform: 'capitalize',
            }}>
            {item.eng}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Meaning;
