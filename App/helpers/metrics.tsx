import { Dimensions, Platform } from 'react-native';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const isIphoneX = y / x > 2.1;

const Metrics = {
  platform: Platform.OS,
  marginHorizontal: 16,
  marginVertical: 10,
  screenWidth: x < y ? x : y,
  screenHeight: x < y ? y : x,
  isIphoneX: isIphoneX,
  radius: 4,
};

export default Metrics;
