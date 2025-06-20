import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const genericWidth = (ratio: number) => scale(ratio);
export const genericHeight = (ratio: number) => verticalScale(ratio);
export const genericRatio = (ratio: number) => moderateScale(ratio);
