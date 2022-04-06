import { StyleSheet } from 'react-native';
import { Colors } from '~/app/config/Colors';

export default StyleSheet.create({
  item: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.greyscaleBorder,
  },
  imgPoster: {
    width: 100,
    height: (100 / 500) * 281,
    resizeMode: 'contain',
    borderRadius: 4,
  },
  body: {
    flex: 1,
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginLeft: 6,
  },
  ratingText: {
    marginLeft: 2.5,
  },
});
