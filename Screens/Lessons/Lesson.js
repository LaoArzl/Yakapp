import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const Lesson = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {lesson, color} = route.params;
  const {width, height} = Dimensions.get('window');
  const [state, setState] = useState('');

  const submitUpdate = id => {
    Axios.put(`http://10.0.2.2:3001/${id}/completed`)
      .then(response => {
        if (response.data) {
          setState('sucess');
          setTimeout(() => setState(''), 500);
        }
      })
      .catch(e => console.log(e.response.data));
  };

  return (
    <>
      <StatusBar backgroundColor="#407BFF" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#407BFF'}}>
        <HeaderBack nav={navigation} background="#407BFF" color="#fff" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={['#407BFF', '#407BFF']}
            style={{
              minHeight: 100,
              padding: 20,
              justifyContent: 'center',
              zIndex: 3,
              backgroundColor: 'pink',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#fff',
                fontSize: 20,
                marginBottom: 10,
              }}>
              {lesson.lessonTitle}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: '#fff',
                fontSize: 14,
              }}>
              {!lesson.description ? '' : lesson.description}
            </Text>
            <View
              style={{
                width: 150,
                height: 80,
                position: 'absolute',
                right: 20,
                zIndex: -1,
                opacity: 1,
              }}></View>
          </LinearGradient>
          <View
            style={{
              backgroundColor: '#fff',
              minHeight: height - 195,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              zIndex: 2,
            }}>
            {lesson.chapters.map((e, key) => {
              return (
                <TouchableOpacity
                  key={e._id}
                  onPress={() => {
                    navigation.navigate('Chapter', {
                      chapter: e,
                      color: color,
                      key: key + 1,
                    });
                  }}
                  style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#fff',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      marginRight: 10,
                      color: '#272727',
                    }}>
                    {key + 1}.
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      marginRight: 5,
                      color: '#272727',
                    }}>
                    {e.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 13,
                      color: '#55555C',
                    }}></Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Lesson;
