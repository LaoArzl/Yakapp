import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Surface} from 'react-native-paper';

const Home = ({navigation}) => {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let getDate = new Date();
  let getMonth = months[getDate.getMonth()];
  let getDay = getDate.getUTCDate();
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView style={styles.homeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerBackground}>
            <Image
              source={require('../Assets/blob.png')}
              style={{
                position: 'absolute',
                top: -250,
                left: -150,
                width: 400,
                height: 500,
                zIndex: 1,
              }}
            />

            <Image
              style={styles.headerImage}
              source={require('../Assets/wave.png')}
            />
            <Text style={styles.headerText}>Hello Arzl James</Text>
            <Text style={styles.greetings}>How are you today?</Text>
          </View>

          <View style={styles.headerExtension}></View>

          <View style={styles.categoryContainer}>
            <View style={styles.categoryContainer2}>
              <View style={styles.categoryDivider}>
                <TouchableOpacity style={styles.IconContainer}>
                  <Ionicons name="bookmark-outline" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Bookmark</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity style={styles.IconContainer}>
                  <SimpleLineIcons name="book-open" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Dictionary</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity style={styles.IconContainer}>
                  <SimpleLineIcons name="note" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Notes</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Scan')}
                  style={styles.IconContainer}>
                  <SimpleLineIcons name="camera" size={20} color="#407BFF" />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Scan</Text>
              </View>
              <View style={styles.categoryDivider}>
                <TouchableOpacity style={styles.IconContainer}>
                  <MaterialCommunityIcons
                    name="google-translate"
                    size={20}
                    color="#407BFF"
                  />
                </TouchableOpacity>
                <Text style={styles.IconLabel}>Translate</Text>
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
              <View>
                <Text style={{fontFamily: 'Poppins-Regular', color: '#808080'}}>
                  View All
                </Text>
              </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginRight: 20,
                  borderWidth: 1,
                  borderColor: '#dedede',
                }}>
                <View
                  style={{
                    height: '65%',
                    overflow: 'hidden',
                  }}>
                  <Image
                    resizeMode="cover"
                    style={{width: '100%'}}
                    source={require('../Assets/2.jpg')}
                  />
                </View>
                <View
                  style={{
                    height: '35%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#272727',
                      fontSize: 18,
                    }}>
                    Beginner
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      marginTop: -5,
                      color: '#808080',
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
                  borderWidth: 1,
                  borderColor: '#dedede',
                }}>
                <View
                  style={{
                    height: '65%',
                    overflow: 'hidden',
                  }}>
                  <Image
                    resizeMode="cover"
                    style={{width: '100%'}}
                    source={require('../Assets/2.jpg')}
                  />
                </View>
                <View
                  style={{
                    height: '35%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#272727',
                      fontSize: 18,
                    }}>
                    Beginner
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      marginTop: -5,
                      color: '#808080',
                    }}>
                    7 Chapters - 20 mins
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#F4F4F4',
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
    fontFamily: 'Poppins-Regular',
    marginTop: -5,
    zIndex: 4,
  },

  headerBackground: {
    backgroundColor: '#407BFF',
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
    backgroundColor: '#407BFF',
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
    elevation: 1,
  },
  categoryDivider: {
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  IconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#F8F8F8',
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
