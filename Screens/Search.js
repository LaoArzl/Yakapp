import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
  const [focus, setFocus] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {focus && (
            <TouchableOpacity
              onPress={() => setFocus(false)}
              style={{
                width: '10%',
                justifyContent: 'center',
              }}>
              <Feather name="chevron-left" size={26} color="#272727" />
            </TouchableOpacity>
          )}
          <View style={{width: focus ? '89%' : '100%'}}>
            <Searchbar
              iconColor="#407BFF"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              inputStyle={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#272727',
                paddingBottom: 5,
                paddingLeft: 0,
              }}
              style={{
                elevation: 0,
                height: 35,
                backgroundColor: '#eee',
                padding: 0,
                borderRadius: 4,
              }}
              placeholder="Search and discover things"
            />
          </View>
        </View>
        {focus === false && (
          <LinearGradient
            colors={['#407BFF', '#40C6FF']}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 0.0}}
            style={{height: 200}}></LinearGradient>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
