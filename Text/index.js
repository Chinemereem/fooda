import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Black} from '../NewAppScreen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SemiBoldText = ({
  onPress,
  style,
  textAlign,
  color = Black,
  title,
  fontSize = hp(14),
  ...props
}) => (
  <Text
    style={[styles.semiBoldTextStyle, {textAlign, color, fontSize}, style]}
    onPress={onPress}
    {...props}>
    {title}
  </Text>
);

export {SemiBoldText};

const styles = StyleSheet.create({
  semiBoldTextStyle: {
    fontSize: hp(14),
  },
});
