/**
 * Author:    Janaka Jati Lasmana
 * Created:   06.04.2022
 *
 * (c) Copyright by Janaka Jati Lasmana.
 **/

import * as React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import { Colors } from '../config';
import { ColorKey } from '../config/Colors';
import { Metrics } from '../helpers';

export type TextProps = RNTextProps & {
  type?:
    | 'regular20'
    | 'regular12'
    | 'regular10'
    | 'regular14'
    | 'semiBold8'
    | 'semiBold10'
    | 'semiBold12'
    | 'semiBold14'
    | 'semiBold16'
    | 'bold14';
  align?: 'center' | 'left' | 'right' | 'auto' | 'justify';
  children: React.ReactNode;
  flex?: boolean;
  color?: ColorKey;
};
export const RESPONSIVE = Metrics.isIphoneX ? 0 : -1;

function Text({
  style,
  type = 'regular14',
  align,
  flex,
  color = 'dark',
  ...props
}: TextProps) {
  return (
    <RNText
      {...props}
      style={[
        styles[type],
        { textAlign: align, color: Colors[color] },
        flex && styles.flex,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  regular10: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10 + RESPONSIVE,
    lineHeight: 14,
  },
  regular12: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12 + RESPONSIVE,
    lineHeight: 19.6,
  },
  regular14: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14 + RESPONSIVE,
    lineHeight: 19.6,
  },
  regular20: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20 + RESPONSIVE,
  },
  semiBold8: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 8 + RESPONSIVE,
  },
  semiBold10: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10 + RESPONSIVE,
  },
  semiBold12: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12 + RESPONSIVE,
    lineHeight: 19.6,
  },
  semiBold14: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14 + RESPONSIVE,
    lineHeight: 19.6,
  },
  semiBold16: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16 + RESPONSIVE,
    lineHeight: 24,
  },
  bold14: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14 + RESPONSIVE,
  },
});

export default Text;
