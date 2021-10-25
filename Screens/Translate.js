import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import HeaderBack from '../Shared/HeaderBack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const Translate = ({navigation}) => {
  const [word, setWord] = useState(0);
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderBack border nav={navigation} title="Translate" />
      <ScrollView showsHorizontalScrollIndicator={false} style={{padding: 20}}>
        {/* <View
          style={{
            height: 'auto',
            backgroundColor: '#fff',
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 20,
          }}>
          <TextInput
            maxLength={30}
            multiline
            onChangeText={text => setWord(text)}
            right={
              <TextInput.Affix
                text={
                  word.length === 0 || word.length === undefined
                    ? '0/30'
                    : word.length + '/30'
                }
              />
            }
            placeholder="Input text here"
            multiline
            style={{
              elevation: 0,
              backgroundColor: 'transparent',
            }}
          />
        </View> */}

        <View
          style={{
            height: 'auto',
            backgroundColor: '#F4F4F4',
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 20,
            elevation: 1,
          }}>
          <View
            style={{
              height: 50,
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#272727',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
              }}>
              English
            </Text>
          </View>
          <View style={{height: 100, paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TextInput
                onChangeText={text => setWord(text)}
                maxLength={30}
                placeholder="Input text here"
                style={{fontFamily: 'Poppins-Regular', color: '#272727'}}
              />
            </ScrollView>
          </View>
          <View
            style={{
              height: 50,
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <AntDesign name="sound" size={20} color="#808080" />
            <Text
              style={{
                color: '#808080',
                marginLeft: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              {word.length === 0 || word.length === undefined
                ? '0/30'
                : word.length + '/30'}
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={['#407BFF', '#40C6FF']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 0.0}}
          style={{
            height: 'auto',
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 20,
          }}>
          <View
            style={{
              height: 50,
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
              }}>
              Yakan
            </Text>
            <Ionicons name="bookmark-outline" size={24} color="#fff" />
          </View>
          <View style={{height: 100, paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{fontFamily: 'Poppins-Regular', color: '#fff'}}>
                This is me
              </Text>
            </ScrollView>
          </View>
          <View
            style={{
              height: 50,
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <AntDesign name="sound" size={20} color="#fff" />
            <Feather
              style={{marginLeft: 20}}
              name="copy"
              size={20}
              color="#fff"
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Translate;
