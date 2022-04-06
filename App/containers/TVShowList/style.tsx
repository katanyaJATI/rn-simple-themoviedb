import { StyleSheet } from 'react-native';
import { RESPONSIVE } from '~/app/components/Text';
import { Colors } from '~/app/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
  },
  searchWrapper: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    paddingTop: 16,
    paddingBottom: 8,
  },
  search: {
    flex: 1,
    paddingLeft: 12,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: 42,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.greyscaleBorder,
  },
  inputLeft: {
    width: 42 / 2,
    height: 42 / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12 + RESPONSIVE,
  },

  footer: {
    marginTop: 10,
    marginBottom: 25,
  },
});
