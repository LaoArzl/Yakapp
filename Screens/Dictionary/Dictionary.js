import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Searchbar} from 'react-native-paper';
import {useSelector} from 'react-redux';

const Dictionary = ({navigation}) => {
  const word = useSelector(state => state.word.value);
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFileterDate] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    if (e) {
      const newData = masterData.filter(item => {
        const itemData = item.Yakan.toUpperCase();
        const textData = e.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFileterDate(newData);
      setQuery(e);
    } else {
      setQuery(e);
      setFileterDate(word);
    }
  };

  useEffect(() => {
    setFileterDate(word);
    setMasterData(word);
  }, []);

  const [on, setOn] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {on && (
        <View
          style={{
            height: 55,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#407BFF',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: '100%',
              width: '10%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: '#fff',
              marginTop: 4,
            }}>
            Dictionary
          </Text>
          {on && (
            <TouchableOpacity
              onPress={() => {
                setOn(false);
              }}
              style={{
                height: '100%',
                width: '10%',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Feather name="search" size={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      )}

      {on === false && (
        <View
          style={{
            height: 55,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
          }}>
          <View style={{width: '80%'}}>
            <Searchbar
              iconColor="#407BFF"
              onChangeText={e => handleSearch(e)}
              autoFocus={true}
              placeholder="Search word"
              inputStyle={{
                fontSize: 14,
                marginBottom: -2,
              }}
              style={{
                height: 35,
                width: '100%',
                borderWidth: 0,
                borderRadius: 4,
                elevation: 0,

                backgroundColor: '#f4f4f4',
              }}
            />
          </View>
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: 70,
            }}>
            <Text
              onPress={() => {
                setOn(true);
                setQuery('');
                setFileterDate(word);
              }}
              style={{
                color: '#407BFF',
                fontFamily: 'Poppins-Regular',

                paddingTop: 4,
                fontSize: 13,
              }}>
              Cancel
            </Text>
          </View>
        </View>
      )}

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filterData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Meaning', {item})}
            style={{
              height: 50,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                textTransform: 'capitalize',
                color: '#272727',
              }}>
              {item.Yakan}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Dictionary;
