import React, { useState } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { TVSeasonType } from '~/app/config/actions';
import { Text } from '~/app/components';

import styles from './style';

type MovieTVSeasonCardProps = {
  data: TVSeasonType;
};

function MovieTVSeasonCard({ data }: MovieTVSeasonCardProps) {
  const isShortDesc = data.overview.length > 100;
  const [showAll, setShowAll] = useState<boolean>(isShortDesc);
  const overview = showAll
    ? data.overview
    : `${data.overview.slice(0, 150)} ...`;
  return (
    <View style={styles.item}>
      <View>
        <ImageBlurLoading
          source={{ uri: `${Config.IMG_URL_500}${data.poster_path}` }}
          style={styles.imgPoster}
        />
      </View>
      <View style={styles.body}>
        <Text type="bold14">{data.name}</Text>
        <View style={styles.space} />
        <View style={styles.row}>
          <Text flex type="semiBold12">
            {data.air_date && `${new Date(data.air_date).getFullYear()} | `}
            {data.episode_count} Episodes
          </Text>
        </View>
        <Text type="regular12" color="greyscaleDesc">
          {overview}
          {isShortDesc &&
            (!showAll ? (
              <Text
                type="regular12"
                color="primary"
                onPress={() => setShowAll(!showAll)}
              >
                {'  '}See more
              </Text>
            ) : (
              <Text
                type="regular12"
                color="primary"
                onPress={() => setShowAll(!showAll)}
              >
                {'  '}Hide less
              </Text>
            ))}
        </Text>
      </View>
    </View>
  );
}

export default MovieTVSeasonCard;
