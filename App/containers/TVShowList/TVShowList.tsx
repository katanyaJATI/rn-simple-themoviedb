import React, { useEffect } from 'react';
import { StatusBar, View, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './style';
import Images from '~/app/images';
import { RootStackParamList } from '~/App';

type TVShowListProps = NativeStackScreenProps<RootStackParamList, 'TVShowList'>;

function TVShowList({ navigation }: TVShowListProps) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />

      <View style={styles.content}>
        <Image source={Images.logo.square} style={styles.imgLogo} />
      </View>
    </SafeAreaView>
  );
}

export default TVShowList;
