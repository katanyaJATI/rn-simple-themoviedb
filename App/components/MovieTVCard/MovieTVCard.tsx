import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Config from 'react-native-config';
import ImageBlurLoading from 'react-native-image-blur-loading';
import { TVPopularType } from '~/app/config/actions';
import { Text, Icon } from '~/app/components';

import styles from './style';

type MovieTVCardProps = {
  data: TVPopularType;
};

function MovieTVCard({ data }: MovieTVCardProps) {
  console.log({ data });
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.item}
      onPress={() => console.log('xxxxxxx')}
    >
      <View>
        <ImageBlurLoading
          source={{ uri: `${Config.IMG_URL_500}${data.backdrop_path}` }}
          style={styles.imgPoster}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text flex type="semiBold14">
            {data.original_name}
          </Text>
          <View style={styles.rating}>
            <Icon name="ICStar" color="white" width={12} height={12} />
            <Text type="semiBold10" color="white" style={styles.ratingText}>
              {data.vote_average}
            </Text>
          </View>
        </View>
        <Text type="regular10" numberOfLines={2}>
          {data.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MovieTVCard;
