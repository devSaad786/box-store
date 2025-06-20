import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const fontSizes = {
  xsm: width * 0.029,
  sm: width * 0.033,
  sm2: width * 0.038,
  md: width * 0.04,
  lg: width * 0.045,
  lg2: width * 0.048,
  xl: width * 0.075,
  xxl: width * 0.16,
};

