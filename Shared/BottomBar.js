import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from '../Screens/Home';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'albums', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomBar;
