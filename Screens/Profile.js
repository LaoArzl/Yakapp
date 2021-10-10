import React, {useState} from 'react';
import {View, Text} from 'react-native';
import NotLogin from './NotLogin';

const Profile = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(false);
  return <>{isLogin ? null : <NotLogin nav={navigation} />}</>;
};

export default Profile;
