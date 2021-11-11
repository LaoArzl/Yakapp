import React from 'react';
import {View, Text} from 'react-native';

const Chapter = ({navigation, route}) => {
  const {chapter} = route.params;
  return (
    <View>
      <Text>{chapter.content}</Text>
    </View>
  );
};

export default Chapter;
