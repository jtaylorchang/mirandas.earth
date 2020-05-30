import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import { images, theme } from '@constants';
import AppNavigator from '@navigation/AppNavigator';
import { setTopLevelNavigator, navigate } from '@navigation/NavigationService';
import './styles/global.css';

const assetImages = [];

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
  await Promise.all([...cacheImages(assetImages), Font.loadAsync({})]);
};

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = React.useState<boolean>(false);
  const [isNavigatorReady, setIsNavigatorReady] = React.useState<boolean>(false);

  const _handleLoadingError = React.useCallback((error: any) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }, []);

  const _handleFinishLoading = React.useCallback(() => {
    setIsLoadingComplete(true);
  }, []);

  if (!isLoadingComplete) {
    return (
      <AppLoading startAsync={_loadResourcesAsync} onError={_handleLoadingError} onFinish={_handleFinishLoading} />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppNavigator
          ref={(navigatorRef) => {
            setTopLevelNavigator(navigatorRef);
            setIsNavigatorReady(true);
          }}
        />
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
