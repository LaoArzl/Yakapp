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
  Dimensions,
} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Searchbar} from 'react-native-paper';

const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
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
                right: 15,
                top: -55,
                opacity: 0.85,
              }}
              source={require('../Assets/orange-triangle.png')}
            />

            <Image
              style={{
                position: 'absolute',
                width: 160,
                height: 160,
                right: -40,
                top: 70,
                opacity: 0.9,
              }}
              source={require('../Assets/pink-triangle.png')}
            />

            <Image
              style={{
                width: 150,
                height: 150,
                position: 'absolute',
                right: 20,
                bottom: 0,
              }}
              source={require('../Assets/saly.png')}
            />

            <Text style={styles.headerText}>Hello User</Text>
            <Text style={styles.greetings}>How are you today?</Text>
          </LinearGradient>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#272727',
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Categories
            </Text>
          </View>
          <View style={styles.categoryContainer2}>
            <View style={styles.categoryDivider}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DictionaryStackScreen')}
                style={styles.IconContainer}>
                <MaterialCommunityIcons
                  name="book-search"
                  size={22}
                  color="#407BFF"
                />
              </TouchableOpacity>
              <Text style={styles.IconLabel}>Dictionary</Text>
            </View>

            <View style={styles.categoryDivider}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ScanStack')}
                style={styles.IconContainer}>
                <Ionicons name="heart" size={22} color="#407BFF" />
              </TouchableOpacity>
              <Text style={styles.IconLabel}>Favorites</Text>
            </View>

            <View style={styles.categoryDivider}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NotepadStack')}
                style={styles.IconContainer}>
                <Ionicons name="pencil" size={22} color="#407BFF" />
              </TouchableOpacity>
              <Text style={styles.IconLabel}>Notepad</Text>
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

          <View
            style={{
              height: 6,
              width: '100%',
              backgroundColor: '#dedede',
            }}></View>

          <View style={{padding: 20}}>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#272727',
                  fontSize: 20,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Lessons for you
              </Text>
            </View>

            {lesson.map((e, key) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Lesson', {
                      lesson: e,
                      color:
                        key % 3 === 0
                          ? '#628AE5'
                          : key % 3 === 1
                          ? '#C975E7'
                          : '#EEB178',
                    })
                  }
                  key={key + e._id}
                  style={{
                    width: '100%',
                    height: 90,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    marginBottom: 2,
                    borderBottomWidth: key + 1 === lesson.length ? 0 : 1,
                    borderBottomColor: 'lightgrey',
                  }}>
                  <Entypo
                    style={{position: 'absolute', right: 10}}
                    name="chevron-small-right"
                    size={24}
                    color="#272727"
                  />
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      marginRight: 20,
                      elevation: 1,
                      backgroundColor:
                        key % 3 === 0
                          ? '#628AE5'
                          : key % 3 === 1
                          ? '#C975E7'
                          : '#EEB178',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{width: '85%', height: '90%'}}
                      source={require('../Assets/book.png')}
                    />
                  </View>
                  <View
                    style={{
                      width: width - 120,
                      height: '100%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        color: '#272727',
                        fontSize: 16,
                        marginBottom: 5,
                      }}>
                      {e.lessonTitle}
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          color: '#55555C',
                          fontSize: 12,
                        }}>
                        {e.chapters.length} Chapters •{' '}
                      </Text>
                      <Ionicons
                        style={{marginRight: 4}}
                        name="timer-outline"
                        size={15}
                        color="#55555C"
                      />
                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          color: '#55555C',
                          fontSize: 12,
                        }}>
                        {e.chapters.length * 2} mins
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
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
    color: '#D3E1FF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: -5,
    zIndex: 4,
  },

  headerBackground: {
    height: 150,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    overflow: 'hidden',
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

  categoryContainer2: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  categoryDivider: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    width: '25%',
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
    borderRadius: 100,
    marginBottom: 5,
  },
  IconLabel: {
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    fontSize: 12,
    color: '#272727',
  },
});
