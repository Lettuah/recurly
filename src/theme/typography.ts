import { TextStyle } from "react-native";
import { fontFamily } from "./fonts";

export const typography = {
  display: {
    fontFamily: fontFamily.bold,
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -1.44, // -4%
  },
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.56,
  },
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 26.4, // 110%
    letterSpacing: -0.48,
  },
  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.36,
  },
  body: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
  },

  bodyMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 17.6, // 1.1
    letterSpacing: -0.32, // -2% // 0.02
  },

  // Caption
  captionSemiBold: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 15.4, // 1.1
    letterSpacing: -0.28, // -2%
  },

  captionMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 18,
  },

  captionRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 18,
  },

  button: {
    fontFamily: fontFamily.semiBold,
    fontSize: 15,
    lineHeight: 20,
  },
} satisfies Record<string, TextStyle>;
