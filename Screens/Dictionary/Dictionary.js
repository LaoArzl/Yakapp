import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Searchbar} from 'react-native-paper';
import {Vocabulary} from './Vocabulary';

const Dictionary = ({navigation}) => {
  const [masterData, setMasterData] = useState([]);
  const [filterData, setFileterDate] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    if (e) {
      const newData = masterData.filter(item => {
        const itemData = item.name.toUpperCase();
        const textData = e.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFileterDate(newData);
      setQuery(e);
    } else {
      setQuery(e);
      setFileterDate(masterData);
    }
  };

  useEffect(() => {
    setFileterDate(Vocabulary);
    setMasterData(Vocabulary);
  }, []);

  const [on, setOn] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {on && (
        <View
          style={{
            height: 60,
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
            }}>
            <Feather name="chevron-left" size={26} color="#fff" />
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
        </View>
      )}
      {on === false && (
        <View
          style={{
            height: 60,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#407BFF',
          }}>
          <View style={{width: '80%'}}>
            <Searchbar
              onChangeText={e => handleSearch(e)}
              autoFocus={true}
              placeholder="Search word"
              inputStyle={{
                fontSize: 14,
              }}
              style={{
                height: 40,
                width: '100%',
                borderWidth: 0,
                borderRadius: 100,
                elevation: 0,
                backgroundColor: '#fff',
              }}
            />
          </View>
          <Text
            onPress={() => setOn(true)}
            style={{
              color: '#fff',
              fontFamily: 'Poppins-Regular',
              textDecorationLine: 'underline',
            }}>
            Cancel
          </Text>
        </View>
      )}

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filterData.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Meaning', {item})}
            style={{
              height: 50,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                textTransform: 'capitalize',
                color: '#272727',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Dictionary;
