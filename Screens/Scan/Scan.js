import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import HeaderBack from '../../Shared/HeaderBack';
import ImagePicker from 'react-native-image-crop-picker';
import TextRecognition from 'react-native-text-recognition';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress/Circle';
import {useEventListener} from 'react-native-tesseract-ocr';

const Scan = ({navigation}) => {
  const word = useSelector(state => state.word.value);
  const [loading, isLoading] = useState(false);
  const [image, setImage] = useState('');
  const [words, setWords] = useState('');
  const [progress, setProgress] = useState(0);
  const [translated, setTranslated] = useState('');
  useEventListener('onProgressChange', p => {
    setProgress(p.percent / 100);
  });

  const DEFAULT_HEIGHT = 500;
  const DEFAULT_WITH = 600;
  const defaultPickerOptions = {
    cropping: true,
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WITH,
  };

  const recognizeTextFromImage = async e => {
    const result = await TextRecognition.recognize(e);
    setWords(result.toString().replace(/,/g, ' '));
    setTranslated(
      result
        .toString()
        .replace(',', ' ')
        .split(' ')
        .map(
          w =>
            w &&
            word
              .filter(
                e =>
                  e.English === w.toLocaleLowerCase() ||
                  e.Yakan === w.toLocaleLowerCase(),
              )
              .map(f => (w === f.Yakan ? f.English : f.Yakan)),
        )
        .join(' '),
    );
  };

  const recognizeFromPicker = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openPicker(options);
      setImage({uri: image.path});
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  const recognizeFromCamera = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openCamera(options);
      setImage({uri: image.path});
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <SafeAreaView
        style={{flex: 1, backgroundColor: image ? '#f4f4f4' : '#fff'}}>
        <View
          style={{
            height: 55,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 20,
            backgroundColor: '#fff',
          }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={26}
            color="#407BFF"
          />
        </View>
        <ScrollView>
          {image === '' && (
            <View
              style={{
                paddingHorizontal: 20,
                alignItems: 'center',
                marginTop: 100,
              }}>
              <Text style={styles.instructions}>Choose image source:</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => {
                    recognizeFromCamera();
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#407BFF',
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 15,
                    elevation: 8,
                  }}>
                  <Feather
                    style={{marginBottom: 5}}
                    name="camera"
                    size={30}
                    color="#fff"
                  />
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                    }}>
                    Camera
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    recognizeFromPicker();
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#407BFF',
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 8,
                  }}>
                  <Feather
                    style={{marginBottom: 5}}
                    name="image"
                    size={30}
                    color="#fff"
                  />
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                    }}>
                    Gallery
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {image !== '' && (
            <>
              <View style={styles.imageContainer}>
                <Image style={{width: '100%', height: 200}} source={image} />
              </View>

              <View
                style={{
                  marginTop: 20,
                  width: '100%',
                  height: 'auto',
                  paddingHorizontal: 20,
                  paddingTop: 40,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: '#272727',
                    fontSize: 16,
                    marginBottom: 10,
                  }}>
                  Detected Text
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: '#407BFF',
                    fontSize: 20,
                    marginBottom: 30,
                    marginLeft: 10,
                  }}>
                  {words}
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: '#272727',
                    fontSize: 16,
                    marginBottom: 10,
                  }}>
                  Translation
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: '#407BFF',
                    fontSize: 20,
                    marginLeft: 10,
                  }}>
                  {translated.length === 0
                    ? 'No translation 🙁'
                    : translated.replace(',', '/')}
                </Text>
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    elevation: 8,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#272727',
    marginBottom: 20,
  },
});

export default Scan;
