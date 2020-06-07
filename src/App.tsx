import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { useSelector, useDispatch } from 'react-redux';

import { TRedux } from '@reducers';
import { _blog } from '@reducers/actions';
import { images, theme } from '@constants';
import AppNavigator from '@navigation/AppNavigator';
import { log } from '@services/logService';
import './styles/global.css';

const assetImages = [images.MirandasEarth, images.MirandasEarthLine];

const cacheImages = (images: any) => {
  return images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const _loadResourcesAsync = async () => {
  await Promise.all([
    ...cacheImages(assetImages),
    Font.loadAsync({
      OpenSans: require('../assets/font/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('../assets/font/OpenSans-Bold.ttf'),
      'OpenSans-SemiBold': require('../assets/font/OpenSans-SemiBold.ttf'),
      'OpenSans-Light': require('../assets/font/OpenSans-Light.ttf'),
      'PlayfairDisplay-Bold': require('../assets/font/PlayfairDisplay-Bold.ttf')
    })
  ]);
};

const App = () => {
  const client = useSelector((state: TRedux) => state.blog.client);

  const [isLoadingComplete, setIsLoadingComplete] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const dispatchInitClient = React.useCallback(() => dispatch(_blog.initClient()), [dispatch]);
  const dispatchGetPosts = React.useCallback(() => dispatch(_blog.getPosts(client)), [client, dispatch]);

  const _handleLoadingError = React.useCallback((error: any) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }, []);

  const _handleFinishLoading = React.useCallback(() => {
    setIsLoadingComplete(true);
  }, []);

  React.useEffect(() => {
    if (client === null) {
      dispatchInitClient();
    }
  }, [client, dispatchInitClient]);

  React.useEffect(() => {
    if (client !== null) {
      dispatchGetPosts();
    }
  }, [client, dispatchGetPosts]);

  if (!isLoadingComplete) {
    return (
      <AppLoading startAsync={_loadResourcesAsync} onError={_handleLoadingError} onFinish={_handleFinishLoading} />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
