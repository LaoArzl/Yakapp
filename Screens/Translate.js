import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../Shared/HeaderBack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import * as Speech from 'expo-speech';

const Translate = ({navigation}) => {
  const Vocabulary = useSelector(state => state.word.value);
  const [word, setWord] = useState('');
  const [translated, setTranslated] = useState('');

  const textSpeech = s => {
    Speech.speak(s);
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#F4F4F4', flex: 1}}>
        <HeaderBack nav={navigation} title="Translate" background="#fff" />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{
              height: 'auto',
              backgroundColor: '#fff',
              overflow: 'hidden',
              marginBottom: 20,
              elevation: 4,
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
            <View
              style={{
                height: 130,
                paddingHorizontal: 20,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput
                  value={word}
                  onChangeText={ee => {
                    setWord(ee);
                    setTranslated(
                      ee
                        .split(' ')
                        .map(
                          word =>
                            word &&
                            Vocabulary.filter(
                              e =>
                                e.English === word.toLocaleLowerCase() ||
                                e.English === word.toLocaleLowerCase() + 's' ||
                                e.English + 's' === word.toLocaleLowerCase(),
                            ).map(f => f.Yakan),
                        )
                        .join(' ')
                        .replace(',', '/'),
                    );
                  }}
                  autoFocus={true}
                  maxLength={30}
                  multiline={true}
                  placeholder="Input text here"
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: '#272727',
                    height: 'auto',
                    fontSize: 20,
                  }}
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
              <TouchableOpacity onPress={() => navigation.navigate('ScanType')}>
                <FontAwesome name="camera" size={20} color="#407BFF" />
              </TouchableOpacity>
              <FontAwesome
                style={{marginLeft: 20}}
                name="microphone"
                size={20}
                color="#407BFF"
              />
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

          {translated.length === 0 ? null : (
            <View style={{paddingHorizontal: 20}}>
              <View
                style={{
                  height: 'auto',
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginBottom: 20,
                  backgroundColor: '#407BFF',
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
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#fff',
                        fontSize: 20,
                      }}>
                      {translated}
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
                  <AntDesign
                    onPress={() => textSpeech(translated)}
                    name="sound"
                    size={20}
                    color="#fff"
                  />
                  <Feather
                    style={{marginLeft: 20}}
                    name="copy"
                    size={20}
                    color="#fff"
                  />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Translate;
