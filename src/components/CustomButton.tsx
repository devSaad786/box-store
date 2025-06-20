import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { fontFamily } from "../assets/fonts";
import { fontSizes } from "../utilities/fontSizes";

interface CustomButtonProps {
  onPress?: () => void;
  color: string;
  text: string;
  btnHeight: number;
  btnWidth: number;
  textColor: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  fontSize?: number;
  pressedColor?: string;
  pressedTextColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  color,
  text,
  btnHeight,
  btnWidth,
  textColor,
  borderColor,
  borderWidth,
  borderRadius = 10,
  fontSize = fontSizes.lg,
  pressedColor,
  pressedTextColor,
}) => {
  const [pressed, setPressed] = useState(false);

  const backgroundColor = pressed && pressedColor ? pressedColor : color;
  const textColorFinal = pressed && pressedTextColor ? pressedTextColor : textColor;

  return (
    <TouchableOpacity
      style={[
        styles.customBtnMain,
        {
          height: btnHeight,
          width: btnWidth,
          backgroundColor,
          borderWidth,
          borderColor,
          borderRadius,
        },
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => {
        setPressed(false);
        onPress?.();
      }}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.customBtnText,
          {
            color: textColorFinal,
            fontSize,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customBtnMain: {
    alignItems: "center",
    justifyContent: "center",
  },
  customBtnText: {
    fontFamily: fontFamily.OpenSansBold,
    textTransform: "capitalize",
    fontWeight: "700",
  },
});

export default CustomButton;
