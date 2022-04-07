import { StyleSheet } from 'react-native';
import { Colors } from '~/app/config';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.black25,
    zIndex: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 15,
  },
  space: {
    width: 12,
  },
});
