import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    <SafeAreaView style={{flex: 1, backgroundColor: color}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBack nav={navigation} background={color} color="#fff" />
        <View
          style={{
            minHeight: 100,
            marginBottom: 20,
            paddingHorizontal: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: '#fff',
              fontSize: 20,
            }}>
            {lesson.lessonTitle}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#fff',
              fontSize: 14,
            }}>
            {!lesson.description && 'No description available.'}
          </Text>
          <View
            style={{
              width: 150,
              height: 80,
              position: 'absolute',
              right: 20,
              zIndex: -1,
              opacity: 1,
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../Assets/hands.png')}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            minHeight: height - 195,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          }}>
          {lesson.chapters.map((e, key) => {
            return (
              <TouchableOpacity
                key={e._id}
                onPress={() => {
                  submitUpdate(e._id);
                  navigation.navigate('Chapter', {chapter: e});
                }}
                style={{
                  width: '100%',
                  height: 70,
                  marginBottom: 15,
                  backgroundColor: '#f4f4f4',
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                  borderRadius: 10,
                  elevation: 1,
                }}>
                <AntDesign
                  style={{position: 'absolute', right: 20}}
                  name="checkcircleo"
                  size={18}
                  color={e.complete === false ? '#bfbfbf' : '#00b300'}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    marginBottom: -2,
                    color: '#272727',
                  }}>
                  Chapter {key + 1}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 13,
                    color: '#55555C',
                  }}>
                  {e.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson;
