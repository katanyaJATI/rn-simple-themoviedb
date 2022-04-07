import { StyleSheet } from 'react-native';
import { Colors } from '~/app/config/Colors';

export default StyleSheet.create({
  item: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.greyscaleBorder,
  },
  imgPoster: {
    width: 100,
    height: (100 / 500) * 735,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  body: {
    flex: 1,
    marginLeft: 12,
    paddingVertical: 4,
  },
  space: {
    height: 4,
  },
  row: {
    flexDirection: 'row',
  },
});
