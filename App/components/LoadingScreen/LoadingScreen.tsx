import React from 'react';
import { ActivityIndicator, ViewStyle, SafeAreaView, View } from 'react-native';
import { Colors } from '~/app/config';
import Text from '../Text';
import styles from './style';

type LoadingScreenType = {
  light?: boolean;
  style?: ViewStyle;
};

function LoadingScreen({ style }: LoadingScreenType) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <View style={styles.space} />
        <Text type="semiBold14" color="primary">
          Loading ...
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default LoadingScreen;
