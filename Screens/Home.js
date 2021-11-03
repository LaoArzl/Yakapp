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

            {/* <Image
              style={{
                width: 140,
                height: 140,
                position: 'absolute',
                right: -95,
                top: -10,
              }}
              source={require('../Assets/circle.png')}
            /> */}

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
              <View style={styles.categoryDivider}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ScanStack')}
                  style={styles.IconContainer}>
                  <Feather name="bookmark" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Bookmark</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Translate')}
                  style={styles.IconContainer}>
                  <Ionicons name="pencil" size={22} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Notepad</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity style={styles.IconContainer}>
                  <AntDesign name="linechart" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Progress</Text>
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
                      borderRadius: 10,
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
                      style={{width: '90%', height: '90%'}}
                      source={require('../Assets/book.png')}
                    />
                  </View>
                  <View
                    style={{
                      borderBottomWidth: key + 1 === lesson.length ? 0 : 1,
                      borderBottomColor: '#d3d3d3',
                      width: width - 120,
                      height: '100%',
                      justifyContent: 'center',
                    }}>
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
                        fontFamily: 'Poppins-Regular',
                        color: '#55555C',
                      }}>
                      {e.chapters.length} Chapters
                    </Text>
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
    borderRadius: 20,
    elevation: 4,
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
    color: '#55555C',
  },
});
