import React, {useEffect, useState, useCallback} from 'react';
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
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import {changeAppState} from '../features/appState';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(changeAppState('updating'));
    wait(2000).then(() => {
      dispatch(changeAppState(''));
      setRefreshing(false);
    });
  }, []);

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
      <SafeAreaView style={styles.homeContainer}>
        <StatusBar backgroundColor="#407BFF" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              colors={['#407BFF']}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
          <LinearGradient
            colors={['#407BFF', '#40C6FF']}
            style={styles.headerBackground}>
            <Image
              style={{
                position: 'absolute',
                width: 150,
                height: 150,
                right: 55,
                top: -25,
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
              paddingTop: 20,
              backgroundColor: '#fff',
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
                onPress={() => navigation.navigate('Favorites')}
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
              <Text style={styles.IconLabel}>Notes</Text>
            </View>

            <View style={styles.categoryDivider}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TranslateStack')}
                style={styles.IconContainer}>
                <MaterialCommunityIcons
                  name="google-translate"
                  size={22}
                  color="#407BFF"
                />
              </TouchableOpacity>
              <Text style={styles.IconLabel}>Translate</Text>
            </View>
          </View>

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
                  marginBottom: 10,
                }}>
                Lessons for you
              </Text>
            </View>

            <View
              style={{
                elevation: 4,
                paddingLeft: 20,
                borderRadius: 20,
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}>
              {!lesson ||
              lesson === null ||
              lesson === undefined ||
              lesson.length === 0 ? (
                <ActivityIndicator size="small" color="red" />
              ) : (
                <>
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
                          marginBottom: key + 1 === lesson.length ? 0 : 4,
                          flexDirection: 'row',
                          alignItems: 'center',
                          position: 'relative',
                        }}>
                        <Entypo
                          style={{position: 'absolute', right: 10}}
                          name="chevron-small-right"
                          size={24}
                          color="#272727"
                        />
                        <View
                          style={{
                            width: 55,
                            height: 55,
                            borderRadius: 15,
                            marginRight: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            backgroundColor: '#eee',
                          }}>
                          {e.icon ? (
                            <Image
                              style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover',
                              }}
                              source={{uri: e.icon}}
                            />
                          ) : (
                            <Image
                              style={{
                                width: '85%',
                                height: '90%',
                              }}
                              source={require('../Assets/book.png')}
                            />
                          )}
                        </View>
                        <View
                          style={{
                            width: width - 120,
                            height: '100%',
                            justifyContent: 'center',
                            borderBottomWidth:
                              key + 1 === lesson.length ? 0 : 1,
                            borderBottomColor: '#dedede',
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Poppins-SemiBold',
                              color: '#272727',
                              fontSize: 16,
                            }}>
                            {e.lessonTitle}
                          </Text>

                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontFamily: 'Poppins-Regular',
                                color: '#272727',
                                fontSize: 12,
                              }}>
                              {e.chapters.length} Chapters
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FBFBFC',
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
