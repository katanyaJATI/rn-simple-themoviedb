import React, { useEffect, useState } from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './style';
import { RootStackParamList } from '~/App';
import { getTVDetails, TVDetailsType } from '~/app/config/actions';
import { Colors } from '~/app/config';
import ImageBlurLoading from 'react-native-image-blur-loading';
import Config from 'react-native-config';
import { LoadingScreen, MovieTVSeasonCard, Text } from '~/app/components';

type MovieTVDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieTVDetail'
>;

function MovieTVDetail({ route }: MovieTVDetailProps) {
  const [detail, setDetail] = useState<TVDetailsType>({} as TVDetailsType);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    _getTVDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _getTVDetails = async () => {
    setLoading(true);

    const resp = await getTVDetails(route.params.id);
    if (resp.status === 200) {
      setDetail(resp.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={Colors.transparent}
      />

      <ScrollView>
        <View>
          <ImageBlurLoading
            source={{ uri: `${Config.IMG_URL_500}${detail.backdrop_path}` }}
            style={styles.imgBackdrop}
          />
        </View>

        <View style={styles.content}>
          <Text type="bold20">{detail.original_name}</Text>
          <Text style={styles.descText} color="greyscaleDesc">
            {detail.overview}
          </Text>

          <View style={styles.season}>
            <Text type="semiBold14">Seasons</Text>
            {detail?.seasons?.map((item, index) => (
              <MovieTVSeasonCard key={'seasons' + index} data={item} />
            ))}
          </View>
        </View>
      </ScrollView>

      {loading && <LoadingScreen />}
    </View>
  );
}

export default MovieTVDetail;
