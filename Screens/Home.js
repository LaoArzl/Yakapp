import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const lesson = useSelector(state => state.lesson.value);
  const appState = useSelector(state => state.appState.value);
  const [userValue, setUserValue] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_details');
      if (value !== null) {
        setUserValue(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    console.log(userValue);
  }, [appState]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView style={styles.homeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={['#407BFF', '#40C6FF']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 0.0}}
            style={styles.headerBackground}>
            <Image
              style={{
                position: 'absolute',
                width: 160,
                height: 160,
                right: 25,
                top: -55,
              }}
              source={require('../Assets/orange-triangle.png')}
            />

            <Image
              style={{
                position: 'absolute',
                width: 160,
                height: 160,
                right: -8,
                top: 50,
              }}
              source={require('../Assets/pink-triangle.png')}
            />

            <Image
              style={{
                width: 140,
                height: 140,
                position: 'absolute',
                right: -95,
                top: -10,
              }}
              source={require('../Assets/circle.png')}
            />
            <Text style={styles.headerText}>Hello Arzl James</Text>
            <Text style={styles.greetings}>How are you today?</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#407BFF', '#40C6FF']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 0.0}}
            style={styles.headerExtension}></LinearGradient>

          <View style={styles.categoryContainer}>
            <View style={styles.categoryContainer2}>
              <View style={styles.categoryDivider}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DictionaryStackScreen')}
                  style={styles.IconContainer}>
                  <SimpleLineIcons name="book-open" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Dictionary</Text>
              </View>

              <View style={styles.categoryDivider}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ScanStack')}
                  style={styles.IconContainer}>
                  <SimpleLineIcons name="camera" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Scan</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Translate')}
                  style={styles.IconContainer}>
                  <MaterialCommunityIcons
                    name="google-translate"
                    size={20}
                    color="#407BFF"
                  />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Translate</Text>
              </View>
            </View>
          </View>

          <View style={{padding: 20, marginTop: 20}}>
            <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: '#272727',
                    fontSize: 20,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  Lessons for you
                </Text>
              </View>
            </View>

            {lesson.map(e => {
              return (
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 100,
                    backgroundColor: '#f4f4f4',
                    borderRadius: 10,
                    marginBottom: 15,
                    padding: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 20,
                      marginRight: 20,
                    }}>
                    <Image
                      style={{width: 60, height: 60}}
                      source={require('../Assets/book.png')}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        color: '#272727',
                        fontSize: 16,
                      }}>
                      {e.lessonTitle}
                    </Text>

                    <Text
                      style={{
                        fontFamily: 'Poppins-regular',
                        color: '#272727',
                      }}>
                      {e.chapters.length} Chapters
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}

            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginRight: 20,
                }}>
                <ImageBackground
                  resizeMode="cover"
                  style={{
                    height: '100%',
                  }}
                  source={require('../Assets/BG/1.png')}
                />
                <View
                  style={{
                    height: '35%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#000',
                    width: '100%',
                    opacity: 0.4,
                  }}></View>
                <View
                  style={{
                    height: '35%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#FFF',
                      fontSize: 18,
                    }}>
                    Beginner
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      marginTop: -5,
                      color: '#FFF',
                    }}>
                    7 Chapters - 20 mins
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginRight: 20,
                }}>
                <ImageBackground
                  resizeMode="cover"
                  style={{
                    height: '100%',
                  }}
                  source={require('../Assets/BG/2.png')}
                />
                <View
                  style={{
                    height: '35%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#000',
                    width: '100%',
                    opacity: 0.4,
                  }}></View>
                <View
                  style={{
                    height: '35%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#FFF',
                      fontSize: 18,
                    }}>
                    Intermediate
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      marginTop: -5,
                      color: '#FFF',
                    }}>
                    7 Chapters - 20 mins
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 2,
    fontFamily: 'Poppins-Bold',
    zIndex: 4,
  },
  greetings: {
    color: '#CED9FF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
    zIndex: 4,
  },

  headerBackground: {
    height: 150,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerImage: {
    position: 'absolute',
    width: 200,
    height: 200,
    opacity: 0.5,
    right: 0,
    zIndex: 3,
  },
  headerExtension: {
    height: 50,
    zIndex: -1,
  },
  categoryContainer: {
    height: 'auto',
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    transform: [{translateY: -50}],
    marginBottom: -50,
  },

  categoryContainer2: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 1,
  },
  categoryDivider: {
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  categoryDividerDiactive: {
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    opacity: 0.2,
  },
  IconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#ECF1F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginBottom: 5,
  },
  IconLabel: {
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    fontSize: 12,
    color: '#272727',
  },
});
