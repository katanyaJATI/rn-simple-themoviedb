import { Dimensions, PixelRatio } from 'react-native';
const wp = (widthPercent: number): number => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(String(widthPercent));
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const hp = (heightPercent: number): number => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(String(heightPercent));
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { wp, hp };
