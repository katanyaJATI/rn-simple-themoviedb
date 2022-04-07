import { StyleSheet } from 'react-native';
import { Metrics } from '~/app/helpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgBackdrop: {
    width: Metrics.screenWidth,
    height: (Metrics.screenWidth / 500) * 281,
  },

  content: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
    marginTop: Metrics.marginHorizontal,
  },
  descText: {
    marginTop: 12,
    textAlign: 'justify',
  },
  season: {
    marginTop: 20,
  },
});
