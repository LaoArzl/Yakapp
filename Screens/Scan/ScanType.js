import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ProgressCircle from 'react-native-progress/Circle';
import TesseractOcr, {
  LANG_ENGLISH,
  useEventListener,
} from 'react-native-tesseract-ocr';
import HeaderBack from '../../Shared/HeaderBack';
import {Button} from 'react-native-paper';
import {Vocabulary} from '../Dictionary/Vocabulary';
import {useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH,
};

function ScanType({navigation}) {
  const word = useSelector(state => state.word.value);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  useEventListener('onProgressChange', p => {
    setProgress(p.percent / 100);
  });

  const recognizeTextFromImage = async path => {
    setIsLoading(true);

    try {
      const tesseractOptions = {};
      const recognizedText = await TesseractOcr.recognize(
        path,
        LANG_ENGLISH,
        tesseractOptions,
      );
      setText(recognizedText);
      setTranslated(
        recognizedText
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
    } catch (err) {
      console.error(err);
      setText('');
    }

    setIsLoading(false);
    setProgress(0);
  };

  const recognizeFromPicker = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openPicker(options);
      setImgSrc({uri: image.path});
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
      setImgSrc({uri: image.path});
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: 55,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 20,
            alignItems: 'flex-end',
            position: 'absolute',
            top: 0,
          }}>
          <FontAwesome5
            onPress={() => navigation.goBack()}
            name="times"
            size={20}
            color="#407BFF"
          />
        </View>
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
        {imgSrc && (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imgSrc} />
            {isLoading ? (
              <ProgressCircle showsText progress={progress} />
            ) : (
              <>
                <Text>Detected Word/s: {text.toLowerCase()}</Text>
                <Text>
                  Translated Word/s:{' '}
                  {translated.length === 0 ? text : translated}
                </Text>
              </>
            )}
          </View>
        )}
        {/* <ScrollView>
          <View style={styles.options}>
            <View style={styles.button}>
              <Button
                icon="camera"
                disabled={isLoading}
                mode="contained"
                onPress={() => {
                  recognizeFromCamera();
                }}>
                Camera
              </Button>

              <Button
                icon="image"
                disabled={isLoading}
                mode="contained"
                onPress={() => {
                  recognizeFromPicker();
                }}>
                Picker
              </Button>
            </View>
            <View style={styles.button}>
              <Button
                disabled={isLoading}
                title="Picker"
                onPress={() => {
                  recognizeFromPicker();
                }}
              />
            </View>
          </View>
          {imgSrc && (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={imgSrc} />
              {isLoading ? (
                <ProgressCircle showsText progress={progress} />
              ) : (
                <>
                  <Text>Detected Word/s: {text.toLowerCase()}</Text>
                  <Text>
                    Translated Word/s:{' '}
                    {translated.length === 0 ? text : translated}
                  </Text>
                </>
              )}
            </View>
          )}
        </ScrollView> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
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
  },
  image: {
    marginVertical: 15,
    height: DEFAULT_HEIGHT / 2.5,
    width: '100%',
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

export default ScanType;
